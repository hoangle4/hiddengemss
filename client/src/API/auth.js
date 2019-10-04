import axios from 'axios';
export default {
  registerUser: formData => {
    return axios.post('/api/user', formData);
  },
  loginUser: formData => {
    return axios.post('/api/user/login', formData);
  }
};
