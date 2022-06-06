import axios from 'axios';
import authHeader from './auth-header';

const API_URL = `${process.env.VUE_API_BASE_URL}/auth/login`;

class UserService {
  getUser() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new UserService();