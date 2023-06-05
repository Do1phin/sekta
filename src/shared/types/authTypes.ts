export type Role = 'dispatcher' | 'manager' | 'jurist' | 'logistician';

export interface IUser {
  _id?: string;
  email: string;
  password: string;
  role?: Role;
  username?: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IResponseData extends IAuthTokens {
  user: IUser;
}
