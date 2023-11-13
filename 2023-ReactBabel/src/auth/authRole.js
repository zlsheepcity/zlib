//nom:authRole
import { AuthConfig } from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ roles

const rolesList = AuthConfig.roles || []
const rolesListSuperusers = AuthConfig.rolesSuperusers || []
const rolesListToKeyObject = (obj, role) => ({...obj, [role]:role})

export const AUTH_ROLE = rolesList.reduce(rolesListToKeyObject, {})
export const AUTH_ROLES_LIST_ALL = Object.values(AUTH_ROLE)
export const AUTH_ROLES_LIST_SUPERUSERS = rolesListSuperusers

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ utils

const compareTwoArraysForAnyMatch = (
  target = [],
  source = [],
) => {
  return target.filter( item => source.includes(item) ).length > 0;
}

// Role direct match
export const authRoleMatchRoles = (
  roles = [],
  access = [],
) => {
  if (!access.length) return true; // no restrictions
  if (!roles.length) return false; // no roles
  return compareTwoArraysForAnyMatch(roles, access)
};

// Role match with extended settings
export const authRoleMatchAccess = (
  roles = [],
  access = [],
) => {
  const accessExtended = [...access, ...AUTH_ROLES_LIST_SUPERUSERS]
  return authRoleMatchRoles(roles, accessExtended);
};
