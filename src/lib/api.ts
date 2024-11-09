import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://vpic.nhtsa.dot.gov/api',
})
