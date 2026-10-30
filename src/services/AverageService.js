import { getBooks, updateBook } from '@/services/BookService'
import { getRatings, getRatingsFromBook } from '@/services/RatingService'

export function computeAverage(list) {
  if (list.length === 0) return null
  const total = list.reduce((sum, r) => sum + r.rating, 0)
  return Math.round((total / list.length) * 10) / 10
}

// Recalcule et enregistre la moyenne d'UN livre
export async function refreshBookAverage(bookId) {
  const response = await getRatingsFromBook(bookId)
  const average = computeAverage(response.data)
  await updateBook(bookId, {
    averageRating: average,
    ratingsCount: response.data.length,
  })
  return average
}

// Recalcule et enregistre la moyenne de TOUS les livres (à lancer une fois)
export async function refreshAllAverages() {
  const [booksResponse, ratingsResponse] = await Promise.all([getBooks(), getRatings()])
  console.log(booksResponse.data, ratingsResponse.data)
  await Promise.all(
    booksResponse.data.map((book) => {
      const bookRatings = ratingsResponse.data.filter((r) => r.bookId === book.id)
      return updateBook(book.id, {
        averageRating: computeAverage(bookRatings),
        ratingsCount: bookRatings.length,
      })
    }),
  )
}
