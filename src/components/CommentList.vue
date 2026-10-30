<script setup>
import { getRatings } from '@/services/RatingService'
import { getUsers } from '@/services/userService'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const ratings = ref([])
onMounted(async () => {
  try {
    const response = await getRatings()
    ratings.value = response.data
  } catch (e) {
    console.error('Ratings not found', e)
    error.value = true
  }
  commentsFilter()
})
const users = ref([])
onMounted(async () => {
  try {
    const response = await getUsers()
    users.value = response.data
  } catch (e) {
    console.error('Users not found', e)
    error.value = true
  }
})
const comments = ref([])
const route = useRoute()
function commentsFilter() {
  for (let item of ratings.value) {
    console.log(String(item.bookId) === String(route.params.id))
    if (String(item.bookId) === String(route.params.id)) {
      comments.value.push(item)
    }
  }
  return comments
}
function checkUsers(id) {
  if (users.value.id === id) {
    return users.mail
  }
}
console.log('test')
console.log(comments)
</script>
<template>
  <div class="comments-header">
    <h2>Commentaires ({{ comments.length }})</h2>
    <span>★★★★★ 4.5 / 5</span>
  </div>
  <article class="comment-item" v-for="comment in comments" :key="comment.id">
    <div class="comment-top">
      <div class="avatar"></div>
      <strong>{{ checkUsers(comment.userId) }}</strong
      ><span class="date">{{ comment.date }}</span>
    </div>
    <p>{{ comment.comment }}</p>
  </article>
</template>
<style scoped>
.comments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-border);
}
.comments-header h2 {
  font-family: var(--font-display);
  font-weight: 400;
}
.comment-item {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--color-border);
}
.comment-top {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--color-wash);
}
.date {
  color: var(--color-dust);
  font-size: 0.8125rem;
}
.comment-item p {
  color: var(--color-ink-light);
  line-height: 1.6;
}
</style>
