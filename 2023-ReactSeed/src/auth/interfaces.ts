import { IObject as IO } from 'Interfaces'
import { AUTH_ROLE } from 'Auth'

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
