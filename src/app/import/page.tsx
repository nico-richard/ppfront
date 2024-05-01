import ImportComponent from '@/components/ImportComponent'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Import() {
    const handleValidateImport = async () => {
        'use server'
        // redirect('/vehicles')
    }

    return <ImportComponent handleValidateImport={handleValidateImport} />
}
