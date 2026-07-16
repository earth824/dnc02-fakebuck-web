'use server';

import z from 'zod';
import { RegisterInput, registerSchema } from '../schemas/auth.schema';
import { ErrorActionResult } from './action.type';
import { AuthApi } from '../api/auth.api';
import { ApiError } from '../api/api-error';
import { redirect } from 'next/navigation';

export async function registerAction(
  input: RegisterInput
): Promise<ErrorActionResult> {
  const parsed = registerSchema.safeParse(input);
  if (!parsed.success) {
    return {
      success: false,
      message: 'Validation failed',
      errors: z.flattenError(parsed.error),
      code: 'VALIDATION_ERROR'
    };
  }
  try {
    await AuthApi.register(parsed.data);
  } catch (error) {
    if (error instanceof ApiError) {
      if (error.statusCode === 409) {
        return {
          success: false,
          message: 'Email already in use',
          code: 'EMAIL_ALREADY_EXISTS'
        };
      }
    }
    throw error;
  }

  redirect('/login');
}
