import { ApiError } from './api-error';

type ApiFetchOptions = Omit<RequestInit, 'body'> & {
  body?: Record<string, unknown> | FormData;
  token?: string;
};

const API_URL = process.env.API_URL ?? 'http://localhost:8000';

export async function apiFetch<T>(
  path: string,
  options?: ApiFetchOptions
): Promise<T> {
  const headers = new Headers(options?.headers);
  if (options?.token) {
    headers.set('Authorization', `Bearer ${options.token}`);
  }

  if (options?.body && !(options instanceof FormData)) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    body: options?.body
      ? options.body instanceof FormData
        ? options.body
        : JSON.stringify(options.body)
      : undefined,
    headers
  });

  if (!response.ok) {
    throw new ApiError(response.status, 'Api error');
  }

  const text = await response.text();
  if (!text) {
    return null as T;
  }

  try {
    return JSON.parse(text);
  } catch {
    return null as T;
  }
}

// const res = await fetch('http://localhost:8000/auth/register', {
//   method: 'POST',
//   body: JSON.stringify({ email: '', password: '', firstName: '' }),
//   headers: {
//     authorization: 'Bearer xxxxxx'
//   }
// });
// if (!res.ok) {
//   throw new Error('Something went wrong');
// }

// let data = (await res.text()) ?? null;
// if (data) data = JSON.parse(data);

// fetch('http://localhost:8000/auth/login');
// if (!res.ok) {
//   throw new Error('Something went wrong');
// }

// let data = (await res.text()) ?? null;
// if (data) data = JSON.parse(data);

// fetch('http://localhost:8000/users/me/avatar');
// if (!res.ok) {
//   throw new Error('Something went wrong');
// }

// let data = (await res.text()) ?? null;
// if (data) data = JSON.parse(data);

// apiFetch('/auth/register');
