import React from 'react'
import { signIn } from '@/../auth'
import PPButton from './common/PPButton'

const signInButton = () => {
    return (
        <form
            action={async () => {
                'use server'
                await signIn('google')
            }}
        >
            <PPButton type="submit" label="Signin with Google" />
        </form>
    )
}

export default signInButton
