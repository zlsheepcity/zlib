import { AUTH_ROLE } from 'Auth'

/**
import { IObject as IO } from 'Interfaces'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ IAuthUser
export interface IAuthUser extends IO {
  token?: string;
  auth?: boolean;
  roles?: string[];
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  active?: boolean;
  rememberDevice?: boolean;
}
export const authUserTemplate:IAuthUser = {
  auth: false,
  roles: [AUTH_ROLE.guest],
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ IAuthCredentials

export interface IAuthCredentials {
  email: string;
  password: string;
};
export const authCredentialsTemplate:IAuthCredentials = {
  email: '',
  password: '',
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
**/

/** 2023.11.13 Typescript removed **/

export const authUserTemplate = {
  auth:   false,
  roles:  [AUTH_ROLE.guest],
};
export const authCredentialsTemplate = {
  email:    '',
  password: '',
};
