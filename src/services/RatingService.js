import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/GregLeBarbar/passion-lecture-json-server/',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export function getRatings() {
  return apiClient.get('/ratings')
}
export function getRatingsFromBook(bookId) {
  return apiClient.get('/ratings', { params: { bookId } })
}
export function addRating(rating) {
  return apiClient.post('/ratings', rating)
}
