import axios from 'axios';
const api = axios.create({ baseURL: "http://localhost:3001" });

export const userSignup = async (registerData) => {
    console.log(registerData);
  const userData = await api.post('/auth/signup', registerData);
  localStorage.setItem('authToken', userData.data.token);
  api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
  return userData.data;
}

export const loginUser = async (loginData) => {
    const userData = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', userData.data.token);
    console.log(userData);
    api.defaults.headers.common.authorization = `Bearer ${userData.data.token}`;
    return userData.data;
  }

  export const GetUserProfile = async () => {
      const userData = await api.get('/user/profile');
      console.log(userData);
      return userData.data;
  }

  export const postPost = async(postData) => { 
    const newPost = await api.post('/posts', postData);
    console.log(newPost);
    return newPost;
  }

  export const putPost = async (id, postData) => {
    const updatePost = await api.put(`/posts/${id}`, postData);
    return updatePost.data;
}

  export const indexCities = async () => {
  const allCities = await api.get('/city/all');
  console.log(allCities);
  return allCities.data;
}

export const destroyPost = async (id) => {
  const deleteUser = await api.delete(`/posts/${id}`);
  return deleteUser.data;
}

export const updateProfile = async (profile) => {
  const updateProfile = await api.put('/user/profile', profile);
  return updateProfile.data;
}

export const getCityPosts = async(cityId) =>{
  const getCityPosts = await api.get(`/city/${cityId}`);
  return getCityPosts.data;

}

  