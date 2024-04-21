'use client'
import React, { useEffect, useState } from 'react'
import { PhotoCard } from './PhotoCard'
import styles from './PhotoList.module.sass'
import { Session } from 'next-auth'
import Spinner from './Spinner'

interface Photo {
    id: string
    baseUrl: string
    filename: string
}

const PhotoList = ({ session }: { session: Session }) => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPhotos = async () => {
            await fetch('https://photoslibrary.googleapis.com/v1/mediaItems:search', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${session.token.accessToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    albumId: 'APpVKE9_SctbRSHUedS_kYo0QpkxdAlznaBhVAtsF_PUg-l5efEd856n7H2YZDqj-q6dnWUBlg3a',
                    pageSize: 20,
                }),
            })
                .then((response) => response.json())
                .then((photosData) => {
                    setIsLoading(false)
                    return setPhotos(photosData.mediaItems)
                })
        }

        fetchPhotos().then()
    }, [session])

    if (!session) {
        return null
    }

    return (
        <div className={styles.photo_list}>
            <ul className={styles.photo_list_list}>
                {isLoading ? (
                    <Spinner />
                ) : (
                    photos.map((photo) => {
                        return (
                            <li key={photo.id}>
                                <PhotoCard path={photo.baseUrl} label={photo.filename} />
                            </li>
                        )
                    })
                )}
            </ul>
        </div>
    )
}

export default PhotoList
