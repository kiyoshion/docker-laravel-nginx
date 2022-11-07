import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'https://localhost',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
  withCredentials: true
})

export default axios
