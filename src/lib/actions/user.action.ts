'use server';

import { redirect } from 'next/navigation';
import { ApiError } from '../api/api-error';
import { UserApi } from '../api/user.api';
import { ErrorActionResult } from './action.type';
import { unstable_update } from '../auth';

export async function uploadCoverAction(
  file: File
): Promise<ErrorActionResult> {
  try {
    await UserApi.uploadCover(file);
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
  redirect('/profile');
}

export async function uploadAvatar(file: File): Promise<ErrorActionResult> {
  try {
    const avatarUrl = await UserApi.uploadAvatar(file);
    await unstable_update({ user: { avatarUrl } });
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
  redirect('/profile');
}
