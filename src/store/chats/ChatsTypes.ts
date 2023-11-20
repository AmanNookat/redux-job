export interface IChatRoom {
  title: string;
  participants: number[];
  id?: number;
}

export interface IChat {
  id: number;
  title: string;
  participants: number[];
  created_at: string;
  messages: any[];
}
