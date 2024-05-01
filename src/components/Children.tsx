'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Children = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname().replace('/', '').toUpperCase()
    return (
        <div className="page">
            <h1 className="text-4xl">{pathName}</h1>
            {children}
        </div>
    )
}

export default Children
