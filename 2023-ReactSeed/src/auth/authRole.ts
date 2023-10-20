//nom:authRole
import { AuthConfig } from 'Auth'
import {
  IObject as IO,
} from 'Interfaces'
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ roles

const rolesList:string[] = AuthConfig.roles || []
const rolesListSuperusers:string[] = AuthConfig.rolesSuperusers || []
const rolesListToKeyObject = (obj:IO, role:string) => ({...obj, [role]:role})

export const AUTH_ROLE = rolesList.reduce(rolesListToKeyObject, {})
export const AUTH_ROLES_LIST_ALL = Object.values(AUTH_ROLE)
export const AUTH_ROLES_LIST_SUPERUSERS = rolesListSuperusers

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ utils

const compareTwoArraysForAnyMatch = (
  target:string[] = [],
  source:string[] = [],
):boolean => {
  return target.filter( item => source.includes(item) ).length > 0;
}

// Role direct match
export const authRoleMatchRoles = (
  roles:string[] = [],
  access:string[] = [],
):boolean => {
  if (!access.length) return true; // no restrictions
  if (!roles.length) return false; // no roles
  return compareTwoArraysForAnyMatch(roles, access)
};

// Role match with extended settings
export const authRoleMatchAccess = (
  roles:string[] = [],
  access:string[] = [],
):boolean => {
  const accessExtended = [...access, ...AUTH_ROLES_LIST_SUPERUSERS]
  return authRoleMatchRoles(roles, accessExtended);
};
