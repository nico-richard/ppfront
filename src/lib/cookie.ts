'use server'
import { cookies } from 'next/headers'

export const accessToken = cookies().get('next-auth.session-token')
