import { UserResponse } from './api.type';
import { authFetch } from './auth-fetch';

export const FriendApi = {
  async getFriend() {
    return authFetch<UserResponse[]>('/friends');
  },

  async getIncomingRequests() {
    return authFetch<UserResponse[]>('/friends/request/incoming');
  },

  async getOutgoingRequests() {
    return authFetch<UserResponse[]>('/friends/request/outgoing');
  }
};
