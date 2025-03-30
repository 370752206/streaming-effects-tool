import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

const authHandler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    {
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (user && user.password === credentials.password) {
          return user;
        }
        return null;
      },
    },
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
  },
});

export const GET = authHandler.handlers.GET;
export const POST = authHandler.handlers.POST;
export const auth = authHandler.auth;
export const signIn = authHandler.signIn;
export const signOut = authHandler.signOut;
