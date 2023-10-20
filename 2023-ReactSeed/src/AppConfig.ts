// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
const AppConfigCore = {
  v: '0.0', // version
  developerMode: true,
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
const AppConfigProject = {
  name: 'AbbTemplate',
  defaultHtmlTitle: 'AbbTemplate',
  authRoles: [
    'guest',
    'admin',
    'developer',
  ],
  authRolesSuperusers: [
    'admin',
    'developer',
  ],
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 
export const AppConfig = {
  ...AppConfigCore,
  ...AppConfigProject,
};
export default AppConfig;
