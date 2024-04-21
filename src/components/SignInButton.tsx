import React from 'react'
import { signIn } from '@/../auth'

const signInButton = () => {
    return (
        <form
            action={async () => {
                'use server'
                await signIn('google')
            }}
        >
            <button type="submit">Signin with Google</button>
        </form>
    )
}

export default signInButton
