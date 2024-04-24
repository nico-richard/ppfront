import { auth } from '../../../auth'
import PhotoList from '@/components/PhotoList'
import prisma from '../../../lib/prisma'

export default async function Photos() {
    const session = await auth()

    const handlePhotoClick = async (name: string) => {
        'use server'
        let existingView: boolean
        await prisma.view
            .findFirst({
                where: { name: name },
            })
            .then(async (data) => {
                if (data === null) {
                    await prisma.view.create({
                        data: { name: name, vehicleId: 4 },
                    })
                } else {
                    console.log('already existing view : ' + name)
                }
            })
    }

    if (!session) {
        return <h3>Not authenticated</h3>
    } else {
        return (
            <div>
                <PhotoList session={session} handlePhotoClick={handlePhotoClick} />
            </div>
        )
    }
}
