import axios from 'axios';

export default{
  getAllBusinesses: function() {
    return axios.get('/api/get/getAllBusinesses')
  }
}