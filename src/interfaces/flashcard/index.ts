import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FlashcardInterface {
  id?: string;
  question: string;
  answer: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface FlashcardGetQueryInterface extends GetQueryInterface {
  id?: string;
  question?: string;
  answer?: string;
  user_id?: string;
}
