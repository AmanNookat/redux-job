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
