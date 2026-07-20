'use server';

import { redirect } from 'next/navigation';
import { ApiError } from '../api/api-error';
import { FriendApi } from '../api/friend.api';
import { ErrorActionResult } from './action.type';

export async function unfriendAction(
  friendId: string
): Promise<ErrorActionResult> {
  try {
    await FriendApi.unfriend(friendId);
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        message: error.message,
        code: 'API_ERROR'
      };
    }
    throw error;
  }
  redirect('/friends');
}

export async function sendRequestAction(
  recipientId: string
): Promise<ErrorActionResult> {
  try {
    await FriendApi.sendRequest(recipientId);
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        message: error.message,
        code: 'API_ERROR'
      };
    }
    throw error;
  }
  redirect('/friends/find');
}

export async function cancelRequestAction(
  recipientId: string
): Promise<ErrorActionResult> {
  try {
    await FriendApi.cancelRequest(recipientId);
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        message: error.message,
        code: 'API_ERROR'
      };
    }
    throw error;
  }
  redirect('/friends/requests/outgoing');
}

export async function acceptRequestAction(
  requesterId: string
): Promise<ErrorActionResult> {
  try {
    await FriendApi.accepRequest(requesterId);
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        message: error.message,
        code: 'API_ERROR'
      };
    }
    throw error;
  }
  redirect('/friends/requests/incoming');
}

export async function rejectRequestAction(
  requesterId: string
): Promise<ErrorActionResult> {
  try {
    await FriendApi.rejectRequest(requesterId);
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        message: error.message,
        code: 'API_ERROR'
      };
    }
    throw error;
  }
  redirect('/friends/requests/incoming');
}
