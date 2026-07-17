import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { loginSchema } from './schemas/auth.schema';
import { AuthApi } from './api/auth.api';

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { maxAge: 86370 },
  providers: [
    Credentials({
      async authorize(input) {
        try {
          const data = loginSchema.parse(input);
          const { access_token, user } = await AuthApi.login(data);
          return { ...user, access_token };
        } catch {
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.access_token = user.access_token;
        token.avatarUrl = user.avatarUrl;
      }

      return token;
    },
    session({ token, session }) {
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.avatarUrl = token.avatarUrl;
      session.user.access_token = token.access_token;
      session.user.id = token.sub;

      return session;
    }
  }
});
