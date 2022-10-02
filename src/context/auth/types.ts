export type UserCategory = 'admin' | 'super' | 'common';

export interface TokenDecode {
  sub: number;
  username: string;
  admin: boolean;
  category: UserCategory
}