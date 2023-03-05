import axios from 'axios';
import {useQuery} from 'react-query';

type ApplicationIdParam = number | string;

const API_BASE = 'http://localhost:8000/api/';

const listApplications = async () => {
  const {data} = await axios.get<Application[]>(`${API_BASE}application`);

  return data;
};

export const useApplicationList = () => {
  return useQuery('applications', listApplications);
};

const getApplicationById = async (applicationId: ApplicationIdParam) => {
  const {data} = await axios.get<Application>(
    `${API_BASE}application/${applicationId}`
  );

  return data;
};

export const useApplicationRead = (applicationId: ApplicationIdParam) => {
  return useQuery(['application', applicationId], () =>
    getApplicationById(applicationId)
  );
};
