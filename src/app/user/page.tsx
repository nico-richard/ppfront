'use client'
import React from 'react'

const page = () => {
    const name = 'Nicolas'
    const submit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const body = { name }
        await fetch('api/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
    }
    return (
        <form onSubmit={submit}>
            <button>Submit</button>
        </form>
    )
}

export default page
