import { UserProfileResponse } from './api.type';
import { authFetch } from './auth-fetch';

export const UserApi = {
  async uploadCover(file: File) {
    const formData = new FormData();
    formData.append('cover', file);
    return authFetch<string>('/users/me/cover', {
      method: 'PATCH',
      body: formData
    });
  },

  async uploadAvatar(file: File) {
    const formData = new FormData();
    formData.append('avatar', file);
    return authFetch<string>('/users/me/avatar', {
      method: 'PATCH',
      body: formData
    });
  },

  async getUserProfile(targetUserId: string) {
    return authFetch<UserProfileResponse>(`/users/${targetUserId}/profile`);
  }
};
