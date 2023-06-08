import {
  IDataSources,
  dataSourceTemplate,
} from 'Data'

export const dataSources:IDataSources = {
  dataSourceTemplate: dataSourceTemplate,
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

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

export default dataSources
