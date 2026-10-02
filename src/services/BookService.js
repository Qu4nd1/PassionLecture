import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/GregLeBarbar/passion-lecture-json-server/',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

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
