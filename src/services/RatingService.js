import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/GregLeBarbar/passion-lecture-json-server/',
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export const getRatingsFromBook = (id) => {
  return apiClient.get(`booksBackend/${id}/ratings`)
}

export const getRatings = () => {
  return apiClient.get('/ratings')
}
