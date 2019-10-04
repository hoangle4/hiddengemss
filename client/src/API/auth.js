import axios from 'axios';
export default {
  registerUser: formData => {
    return axios.post('/api/user', formData);
  }
};
