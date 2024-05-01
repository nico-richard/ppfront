import React from 'react'
import { signOut } from '@/../auth'
import PPButton from './common/PPButton'

const signOutButton = () => {
    return (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <PPButton type="submit" label="Sign out" />
        </form>
    )
}

export default signOutButton
