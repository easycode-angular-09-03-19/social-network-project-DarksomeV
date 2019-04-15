export interface Notification {
  created_at: string;
  message: string;
  readed?: boolean;
  url?: string;
  user_creator_id?: UserCreator | null;
  user_target_id?: string;
  __v?: number;
  _id?: string;
}

interface UserCreator {
  avatar: string;
  full_name: string;
  _id: string;
}
