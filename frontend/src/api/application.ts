import axios from 'axios';
import {useQuery, useMutation, useQueryClient} from 'react-query';

const API_BASE = 'http://localhost:8000/api/';
const APP_API = `${API_BASE}application`;
const QUERY_KEY = 'applications';

const getApplications = async () => {
  const {data} = await axios.get<Application[]>(APP_API);

  return data;
};

export const useApplicationList = () => {
  return useQuery(QUERY_KEY, getApplications);
};

const getApplicationById = async (applicationId: ApplicationIdParam) => {
  const {data} = await axios.get<Application>(`${APP_API}/${applicationId}`);

  return data;
};

export const useApplicationRead = (applicationId: ApplicationIdParam) => {
  return useQuery([QUERY_KEY, applicationId], () =>
    getApplicationById(applicationId)
  );
};

const createApplication = async (application: ApplicationFormFields) => {
  return await axios.post<Application>(APP_API, application);
};

export const useApplicationCreate = () => {
  const queryClient = useQueryClient();
  const applicationList = queryClient.getQueryData<Application[]>(QUERY_KEY);

  return useMutation({
    mutationFn: createApplication,
    onSuccess: newApplication => {
      queryClient.setQueryData(
        QUERY_KEY,
        applicationList?.concat(newApplication.data) ?? [newApplication.data]
      );
    }
  });
};
