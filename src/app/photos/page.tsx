import { auth } from '../../../auth'
import PhotoList from '@/components/PhotoList'

export default async function Photos() {
    const session = await auth()

    if (!session) {
        return <h3>Not authenticated</h3>
    } else {
        return <div>
            <PhotoList session={session} />
        </div>
    }
}
