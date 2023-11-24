export interface IUserReg {
  email: string;
  password: string;
  password_confirm: string;
  phone_number: string;
  type_user: "Human" | "Company";
}

export interface IUserActivate {
  email: string;
  code: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ITokens {
  access: string;
  refresh: string;
}

export interface IUser {
  id: number;
  email: string;
  type_user: "Human" | "Company";
  phone_number: "string";
  is_superuser: boolean;
  is_staff: boolean;
  date_joined: string;
  is_active: boolean;
}
export interface IVideo {
  src: string,
  width?: number,
  height?: number,
  controls?: boolean
}