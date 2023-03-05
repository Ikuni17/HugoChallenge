const apiBase = 'http://localhost:8000/api/';
const defaultFetchOptions: RequestInit = {mode: 'cors'};

export const handleFetch = async <T>(url: string, options?: RequestInit) => {
  try {
    await fetch(url, {...defaultFetchOptions, ...options}).then(response => {
      if (response.ok) {
        // throw new Error(`${response.status}`);
        return response.json() as Promise<T>;
        // return Promise.reject();
      }
    });
  } catch (error) {}
};

export const listApplications = async () => {
  const thing = await handleFetch<Application[]>(`${apiBase}application`);
  console.log(thing);

  return thing;
};
