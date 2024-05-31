import axios from 'axios'
export const GetAlltask = () => {
  return axios.get('http://localhost:8000/task/api/v1/task/')
}