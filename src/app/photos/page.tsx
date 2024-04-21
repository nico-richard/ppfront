import { auth } from '../../../auth'
import { SessionProvider } from 'next-auth/react'
import fs from 'fs'
import PhotoList from '@/components/PhotoList'

export default async function Rechercher() {
    const session = await auth()
    const tokenFile = fs.readFileSync(process.cwd() + 'token.json', { encoding: 'utf-8' })

    if (!session) {
        return <h3>Not authenticated</h3>
    } else {
        const token = JSON.parse(tokenFile)
        return (
            <SessionProvider session={session}>
                <PhotoList token={token} />
            </SessionProvider>
        )
    }
}
