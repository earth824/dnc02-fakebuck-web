import { RegisterInput } from '../schemas/auth.schema';
import { apiFetch } from './api-fetch';

export const AuthApi = {
  register(data: RegisterInput) {
    return apiFetch<void>('/auth/register', {
      method: 'POST',
      body: data
    });
  }
};
