import axios from 'axios';

const taskApi = axios.create({ baseURL: 'http://localhost:8000/task/api/v1/task/' });

export const GetAlltask = () => {
  return taskApi.get('/');
}


export const getTask = (id) => {
  return taskApi.get(`/ ${id}`); 
}

export const CreateTask = (task) => {
  return taskApi.post('/', task);
}

export const deledTask = (id) => {
  return taskApi.delete(`/ ${id}`); // Aquí se usan backticks en lugar de comillas simples
}


export const updateTask = (id, tasks) => {
  return taskApi.put(`/ ${id}`, tasks); 
}
