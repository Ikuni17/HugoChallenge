import axios from 'axios';
import {useQuery} from 'react-query';

const apiBase = 'http://localhost:8000/api/';

const listApplications = async () => {
  const {data} = await axios.get(`${apiBase}application`);

  return data;
};

export const useApplicationList = () => {
  return useQuery<Application[]>('applications', listApplications);
};
