import NextAuth from "next-auth";

import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID_GITHUB,
      clientSecret: process.env.CLIENT_SECRET_GITHUB,
    }),
  ],
});

export { handler as GET, handler as POST };
