import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/GregLeBarbar/passion-lecture-json-server/',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const mandatoryFields = [
  'userId',
  'title',
  'categorie',
  'numberOfPages',
  'extract',
  'summary',
  'writerName',
  'writerSurname',
  'editorName',
  'releaseYear',
  'coverImage',
]

export const getBooks = () => {
  return apiClient.get('/books')
}
export const getMyBooks = () => {
  return apiClient.get('/books')
}

export const getBook = (id) => {
  return apiClient.get(`/books/${id}`)
}
export const deleteMyBook = (id) => {
  return apiClient.delete(`/books/${id}`)
}

//fonction de validation des données des livres avant envoi
export const isBookDataValid = (bookData) => {
  return mandatoryFields.every((field) => {
    const value = bookData[field]
    if (value === undefined || value === null) {
      return false
    }
    if (String(value).trim() === '') {
      return false
    }
    return true
  })
}

//fonction de update des informations du livre
export const updateBook = (id, bookData) => {
  if (!isBookDataValid(bookData)) {
    throw new Error('Tous les champs doivent être renseignés')
  }
  return apiClient.put(`/booksBackend/${id}`, bookData)
}
