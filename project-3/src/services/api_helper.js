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
   
  