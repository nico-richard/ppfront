import React from 'react'
import Image from 'next/image'
import styles from './PhotoCard.module.sass'

interface Props {
    path: string
    label: string
    handlePhotoClick: (label: string) => void
}

export const PhotoCard = ({ path, label, handlePhotoClick }: Props) => {
    return (
        <div className={styles.photo_card}>
            <Image
                src={path}
                alt={label}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                onClick={() => handlePhotoClick(label)}
            />
            <p>{label}</p>
            <div className={styles.photo_details}>
                <h3>Details</h3>
                <p>Details Details Details Details Details Details</p>
            </div>
        </div>
    )
}
