import { Prisma } from "@/lib/db/dbClientPrisma";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(Prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                identifier: { label: "identifier", type: "UserName/email", placeholder: "UserName/email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any> {

                if (!credentials) return null;

                try {

                }
                catch (err) {
                    console.log(err);
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {

                }
            
            return token
        },


        async session({ session, token }) {
            if (token) {
                
            }
            return session
        }
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60,
        updateAge: 3 * 60 * 60
    },
    cookies: {
        sessionToken: {
            name: `next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'strict',
                path: '/',
                secure: true,
            },
        }
    },

};