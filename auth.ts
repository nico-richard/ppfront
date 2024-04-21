import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import fs from 'fs'

export const { auth, handlers, signIn, signOut } = NextAuth({
    secret: process.env.AUTH_SECRET,
    providers: [
        Google({
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/photoslibrary.readonly',
                },
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token
                token.id = profile?.id
            }
            console.log(process.cwd())

            fs.writeFileSync(process.cwd() + 'token.json', JSON.stringify(token))
            return token
        },
    },
})
