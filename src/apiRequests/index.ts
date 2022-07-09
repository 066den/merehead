import { IUser } from './../types/user';
import axios from 'axios';

export const apiUrl = {
  BASE_API_URL: ' http://23.88.43.148',
};

export const apiRequests = {
  fetchUsersFromApi: async () => {
    return await axios.get<IUser[]>(`${apiUrl.BASE_API_URL}/users`);
  },

  fetchUserFromApi: async (id: number) => {
    return await axios.get<IUser>(`${apiUrl.BASE_API_URL}/user/${id}`);
  },

  createUserFromApi: async (user: IUser) => {
    try {
      await axios.post(`${apiUrl.BASE_API_URL}/users`, user);
    } catch (e) {
      console.log(e);
    }
  },

  editUserFromApi: async (user: IUser, id: number) => {
    try {
      await axios.put(`${apiUrl.BASE_API_URL}/user/${id}`, user);
    } catch (e) {
      console.log(e);
    }
  },

  deleteUserFromApi: async (id: number) => {
    try {
      await axios.delete(`${apiUrl.BASE_API_URL}/user/${id}`);
    } catch (e) {
      console.log(e);
    }
  },
};
