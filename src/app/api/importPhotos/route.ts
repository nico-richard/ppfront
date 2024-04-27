import { NextResponse } from 'next/server'
import fs from 'fs/promises' // Utilisez fs.promises pour bénéficier de la version promisifiée de fs
import path from 'path'

export async function GET() {
    const absolutePhotosDirectory = 'C:/Users/nicol/Desktop/Development/ppfront/public/Import'
    const photosDirectory = '/Import/'

    try {
        const files = await fs.readdir(absolutePhotosDirectory)

        const photoFiles = files.filter((file) => {
            const ext = path.extname(file).toLowerCase()
            return ['.jpg', '.jpeg', '.png'].includes(ext)
        })
        const photoNames = photoFiles.map((file) => {
            return {
                path: photosDirectory + file,
                label: file,
            }
        })
        console.log(photoNames)

        return NextResponse.json({ photos: photoNames }, { status: 200 })
    } catch (error) {
        console.error('Erreur de lecture du dossier:', error)
        return NextResponse.json({ error: 'Erreur de lecture du dossier' }, { status: 500 })
    }
}
