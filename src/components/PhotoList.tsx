'use client'
import React, { useEffect, useState } from 'react'
import { PhotoCard } from './PhotoCard'
import styles from './PhotoList.module.sass'
import { Session } from 'next-auth'
import Spinner from './Spinner'
import { Album } from '@/models/Album.model'

interface Photo {
    id: string
    baseUrl: string
    filename: string
}

const PhotoList = ({ session, handlePhotoClick }: { session: Session; handlePhotoClick: (label: string) => void }) => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [albums, setAlbums] = useState<Album[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchAlbums = async () => {
            await fetch('https://photoslibrary.googleapis.com/v1/albums', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${session.token.accessToken}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((albumsData) => {
                    return setAlbums(albumsData.albums)
                })
        }
        fetchAlbums()
    }, [session])

    const fetchPhotos = async (albumId: string) => {
        setIsLoading(true)
        setPhotos([])
        await fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${session.token.accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                albumId: albumId,
                pageSize: 20,
            }),
        })
            .then((response) => response.json())
            .then((photosData: { mediaItems: Photo[] }) => {
                setIsLoading(false)
                return setPhotos(photosData.mediaItems)
            })
    }

    if (!session) {
        return null
    }

    return (
        <div className={styles.photo_list}>
            <div className={styles.album_button_list}>
                {albums.map((album) => {
                    return (
                        <button key={album.id} onClick={() => fetchPhotos(album.id)}>
                            {album.title}
                        </button>
                    )
                })}
            </div>
            <ul className={styles.photo_list_list}>
                {isLoading ? (
                    <Spinner />
                ) : photos ? (
                    photos.map((photo) => {
                        return (
                            <li key={photo.id}>
                                <PhotoCard path={photo.baseUrl} label={photo.filename} handlePhotoClick={handlePhotoClick} />
                            </li>
                        )
                    })
                ) : (
                    <p>Pas de photos trouvées</p>
                )}
            </ul>
        </div>
    )
}

export default PhotoList
