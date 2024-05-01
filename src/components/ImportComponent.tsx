'use client'
import React, { useState } from 'react'
import styles from './ImportComponent.module.sass'
import PhotoListImport from './PhotoListImport'
import Photo from '@/models/Photo.model'

const ImportComponent = ({ handleValidateImport }: { handleValidateImport: () => void }) => {
    const [photos, setPhotos] = useState<Photo[]>([])
    const [selectedImportPhotos, setSelectedImportPhotos] = useState<Photo[]>([])

    const handleImport = async () => {
        const response = await fetch('api/importPhotos')
        const data: { photos: Photo[] } = await response.json()
        setPhotos(data.photos)
    }

    const handleValidate = () => {
        const handleValidate = () => {
            console.log(selectedImportPhotos)
            handleValidateImport()
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
                <h1>Importer des photos</h1>
                <button className={styles.import_component__button} onClick={handleImport}>
                    Importer
                </button>
                <hr />
                <div className={styles.import_component__vehicle_creation_container}>
                    <h3>Nouveau véhicule à partir de ces {selectedImportPhotos.length} photos</h3>
                    <button name="vehicle-creation" className={styles.import_component__button} onClick={handleValidate}>
                        Créer
                    </button>
                </div>
                <hr />
                <div className={styles.import_component__vehicle_creation_container}>
                    <h3>Nouveau véhicule à partir de ces {selectedImportPhotos.length} photos</h3>
                    <button name="vehicle-creation" className={styles.import_component__button} onClick={handleValidate}>
                        Créer
                    </button>
                </div>
                <PhotoListImport photos={photos} details={false} handleImportPhotoClick={handleImportPhotoClick} />
            </div>
        )
    }
}

export default ImportComponent
