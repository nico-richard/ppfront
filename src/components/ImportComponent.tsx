'use client'
import React, { useState } from 'react'
import styles from './ImportComponent.module.sass'
import PhotoListImport from './PhotoListImport'
import Photo from '@/models/Photo.model'

const ImportComponent = () => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [selectedImportPhotos, setSelectedImportPhotos] = useState<Photo[]>([])

    const handleImport = async () => {
        const response = await fetch('api/importPhotos')
        const data: { photos: Photo[] } = await response.json()
        setPhotos(data.photos)
    }

    const handleValidateImport = () => {
        console.log(selectedImportPhotos)
        console.log('selectedImportPhotos')
    }

    const handleImportPhotoClick = (label: string) => {
        const selectedPhoto = photos.filter((photo) => photo.label == label)[0]
        if (!selectedImportPhotos.includes(selectedPhoto)) {
            setSelectedImportPhotos((previousPhotos) => [...previousPhotos, selectedPhoto])
        } else {
            setSelectedImportPhotos((previousPhotos) => previousPhotos.filter((photo) => photo != selectedPhoto))
        }
    }

    return (
        <div className={styles.import_component}>
            <h1>Sélectionner les photos à importer [{selectedImportPhotos.length}]</h1>
            <button className={styles.import_component__button} onClick={handleImport}>
                Importer
            </button>
            <button className={styles.import_component__button} onClick={handleValidateImport}>
                Valider
            </button>
            <PhotoListImport photos={photos} details={false} handleImportPhotoClick={handleImportPhotoClick} />
        </div>
    )
}

export default ImportComponent
