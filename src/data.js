import { API_URL } from './constans';

export const getDataFromApi = () => {
  return fetch(API_URL)
    .then((data) => data.json())
    .then((data) => data);
};
export const addTaskToApi = (task) => {
  return fetch(API_URL, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
};

export const deleteTaskToApi = (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: 'delete',
  });
};
export const completeTaskOnApi = (task) => {
  return fetch(`${API_URL}/${task.id}`, {
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...task, completed: true }),
  });
};
