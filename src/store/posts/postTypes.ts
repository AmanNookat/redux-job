export interface ITokens {
  access: string;
  refresh: string;
}

export interface IAddPost {
  name: string;
  type_post: string;
  description: string;
  title: string;
  position: string;
  celery: number;
  type_work: string;
  type_employment: string;
}

export interface IDesc {
  id: number;
  title: string;
  body: string;
  post: string;
}

export interface IPost {
  id: number;
  name: string;
  user: string;
  type_post: string;
  description: string;
  celery: number;
  title: string;
  position: string;
  type_work: string;
  type_employment: string;
  desc: [];
}
