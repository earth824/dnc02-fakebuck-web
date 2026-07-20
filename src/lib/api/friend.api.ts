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
  },

  async getSuggestionFriend() {
    return authFetch<UserResponse[]>('/friends/request/suggestion');
  },

  async unfriend(friendId: string) {
    return authFetch<string>(`/friends/${friendId}`, { method: 'DELETE' });
  },

  async sendRequest(recipientId: string) {
    return authFetch<string>(`/friends/request/${recipientId}`, {
      method: 'POST'
    });
  },

  async cancelRequest(recipientId: string) {
    return authFetch<string>(`/friends/request/${recipientId}`, {
      method: 'DELETE'
    });
  },

  async accepRequest(requesterId: string) {
    return authFetch<string>(`/friends/request/${requesterId}/accept`, {
      method: 'POST'
    });
  },

  async rejectRequest(requesterId: string) {
    return authFetch<string>(`/friends/request/${requesterId}/reject`, {
      method: 'POST'
    });
  }
};
