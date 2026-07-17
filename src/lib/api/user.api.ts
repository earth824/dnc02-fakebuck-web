import { authFetch } from './auth-fetch';

export const UserApi = {
  async uploadCover(file: File) {
    const formData = new FormData();
    formData.append('cover', file);
    return authFetch<string>('/users/me/cover', {
      method: 'PATCH',
      body: formData
    });
  }
};
