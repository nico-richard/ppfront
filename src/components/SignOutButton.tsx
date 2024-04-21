import React from 'react'
import { signOut } from '@/../auth'

const signOutButton = () => {
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <button type="submit">Sign out</button>
        </form>
    )
}

export default signOutButton
