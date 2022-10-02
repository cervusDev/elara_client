import { Login, Token } from './types';
import { ApiService } from '@/service/api.service';

export const auth = new ApiService<Login, Token>('auth');
