import axios from 'axios';
export default {
  addNewGem: FormData => axios.post('/api/gem', FormData),
  getAllGem: () => axios.get('/api/gem')
};
