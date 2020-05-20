import { asyncGet } from '../utils/axiosConfig';

export async function getAllBusinesses() {
  return asyncGet('/api/business');
}

const businessApi = {
  getAllBusinesses: getAllBusinesses,
};

export default businessApi;
