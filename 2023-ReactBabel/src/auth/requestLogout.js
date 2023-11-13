import { dataRequest } from 'Data'

export async function authRequestLogout() {
  const logoutRequest  = { source:'AuthLogout' };
  const logoutResponse = await dataRequest(logoutRequest);
  return logoutResponse;
};
