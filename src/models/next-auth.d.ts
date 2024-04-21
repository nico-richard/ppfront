import NextAuth from 'next-auth'

declare module 'next-auth' {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    export interface Session {
        token: Token
    }

    export interface Token {
        accessToken: string
        refreshToken: string
    }
}
