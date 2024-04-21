import Photo from '@/models/Photo.model'
import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

async function listFilesInFolder(directoryPath: string): Promise<Photo[]> {
    const filesList: Photo[] = []

    const files = await fs.promises.readdir(directoryPath)

    for (const file of files) {
        const filePath = `${directoryPath}/${file}`
        const stats = await fs.promises.stat(filePath)

        if (stats.isFile() && file.split('.')[file.split('.').length - 1].toLowerCase() === 'jpg') {
            filesList.push({ path: `file:///${filePath}`, label: file })
        } else if (stats.isDirectory()) {
            const subFiles = await listFilesInFolder(filePath)
            filesList.push(...subFiles)
        }
    }

    return filesList
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const directoryPath = 'C:/Users/nicol/Pictures/photos_pompier'

    try {
        const filesList = await listFilesInFolder(directoryPath)
        return NextResponse.json({ files: filesList }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Impossible de lister les fichiers.' }, { status: 500 })
    }
}
