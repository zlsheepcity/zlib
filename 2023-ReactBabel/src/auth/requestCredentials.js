//nom:authRequestCredentials
import {
  AUTH_ROLE,
  authUserTemplate,
} from 'Auth'
import {
  dataRequest,
} from 'Data'

export const authRequestCredentials = async (credentials) => {

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Step 1 token

  const tokenRequest  = {source:'AuthToken', document:credentials};
  const tokenResponse = await dataRequest(tokenRequest);
  const token = tokenResponse.data;
  if (!token) return tokenResponse;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Step 2 user

  const userRequest  = {source:'AuthUserCurrent', token};
  const userResponse = await dataRequest(userRequest);
  const user = userResponse.data;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Step 2 modify

  user.token = token;
  user.rolesList = [];

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  return { ...userResponse, data:user };
};
