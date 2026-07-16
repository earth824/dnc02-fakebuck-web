import 'next-auth';
import 'next-auth/jwt';

declare module 'next-auth' {
  interface User {
    firstName?: string;
    lastName?: string;
    access_token?: string;
    avatarUrl?: string | null;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    firstName?: string;
    lastName?: string;
    access_token?: string;
    avatarUrl?: string | null;
  }
}
