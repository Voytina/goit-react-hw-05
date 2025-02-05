import axios from 'axios';

const BASE_URL = 'https://dummyjson.com';

export async function fetchAllUsers() {
  const { data } = await axios.get(`${BASE_URL}/users`);

  return data;
}

export async function  fetchUserById(id) {

  const {data} = await axios.get(`${BASE_URL}/users/${id}`);

  return data
  
}




export async function fetchPostsByUserId(id) {

  const {data} = await axios.get(`${BASE_URL}/posts/user/${id}`);

  return data
  
}