import { LoginInput, RegisterInput } from '../schemas/auth.schema';
import { apiFetch } from './api-fetch';
import { LoginResponse } from './api.type';

export const AuthApi = {
  register(data: RegisterInput) {
    return apiFetch<void>('/auth/register', {
      method: 'POST',
      body: data
    });
  },

  login(data: LoginInput) {
    return apiFetch<LoginResponse>('/auth/login', {
      method: 'POST',
      body: data
    });
  }
};
