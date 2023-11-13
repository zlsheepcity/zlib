import {
  dataSourceTemplate,
} from 'Data';

export const dataSources = {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Templates
  dataSourceTemplate,
  dataSourceExample: {
    ...dataSourceTemplate,
    endpoint: '/api/path',
    method: 'POST',
  },
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Auth

  AuthLogin: {
    ...dataSourceTemplate,
    endpoint: '/auth/login',
    method: 'POST',
  },

  AuthLogout: {
    ...dataSourceTemplate,
    endpoint: '/auth/logout',
    method: 'POST',
  },

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

};

export default dataSources;
