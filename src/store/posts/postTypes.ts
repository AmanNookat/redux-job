export interface ITokens {
  access: string;
  refresh: string;
}

export interface IAddPost {
  name: string;
  type_post: string;
  description: string;
  celery: number;
}

export interface IPost {
  id: number;
  name: string;
  user: string;
  type_post: string;
  description: string;
  celery: number;
}
