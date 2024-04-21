import NextAuth, { DefaultSession } from 'next-auth'
import Google from 'next-auth/providers/google'

export const { auth, handlers, signIn, signOut } = NextAuth({
    secret: process.env.AUTH_SECRET || 'any random string',
    providers: [
        Google({
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/photoslibrary.readonly',
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
                token.refreshToken = account.refresh_token
            }
            return token
        },
        async session({ session, token }) {
            return {
                ...session,
                token: {
                    accessToken: token.accessToken,
                    refreshToken: token.refreshToken,
                },
            }
        },
    },
})
