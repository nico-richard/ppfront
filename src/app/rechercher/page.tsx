'use client'
import { useState, useEffect } from 'react'

export default function Rechercher() {
    const [data, setData] = useState<{ id: number; title: string }[]>([])

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((data) => setData(data))
        }

        fetchAlbums()
    }, [])

    return (
        <div>
            <h1>Rechercher</h1>
            <ul>
                {data.map((album) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    )
}
