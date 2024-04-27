import React, { useState } from 'react'
import Image from 'next/image'
import styles from './PhotoCard.module.sass'

interface Props {
    path: string
    label: string
    handlePhotoClick: (label: string) => void
    handleImportPhotoClick: (label: string) => void
    details: boolean
}

export const PhotoCard = ({ path, label, handlePhotoClick, handleImportPhotoClick, details }: Props) => {
    const [clicked, setClicked] = useState<boolean>(false)

    const handleClick = () => {
        handlePhotoClick(label)
        handleImportPhotoClick(label)
        setClicked(!clicked)
    }

    return (
        <div className={styles.photo_card}>
            <Image
                src={path}
                alt={label}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className={clicked && !details ? styles.photo_card__image_clicked : styles.photo_card__image_not_clicked}
                onClick={handleClick}
            />
            <p>{label}</p>
            {details ? (
                <div className={styles.photo_details}>
                    <h3>Details</h3>
                    <p>Details Details Details Details Details Details</p>
                </div>
            ) : null}
        </div>
    )
}
