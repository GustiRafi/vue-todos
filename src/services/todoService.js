import axios from 'axios';

const API_URL = 'http://laraBest.test/api';

export const getTodos = async () => {
  return await axios.get(`${API_URL}/todos`);
};

export const getTodo = async (id) => {
  return await axios.get(`${API_URL}/todos/${id}`);
};

export const createTodo = async (todo) => {
  return await axios.post(`${API_URL}/todos`, todo);
};

export const updateTodo = async (id, todo) => {
  return await axios.post(`${API_URL}/todos/${id}/update`, todo);
};

export const deleteTodo = async (id) => {
  return await axios.post(`${API_URL}/todos/${id}/destroy`);
};
