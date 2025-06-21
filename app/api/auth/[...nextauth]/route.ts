import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import { Session } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // Attach user ID to the session object
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Store user ID in the JWT token
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
    redirect({ url, baseUrl }) {
      // Redirect to the dashboard after login
      if (url.startsWith(baseUrl)) {
        return baseUrl + '/dashboard';
      }
      return url;
    }
  },
});

export { handler as GET, handler as POST };