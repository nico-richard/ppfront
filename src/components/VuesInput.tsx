import React from 'react'
import styles from './VuesInput.module.sass'
import Photo from '@/models/Photo.model'
import { PhotoCard } from './PhotoCard'

const VuesInput = ({ photos }: { photos: Photo[] }) => {
    return (
        <div className={styles.vues_input}>
            <p>Photos associées</p>
            {photos ? (
                photos.map((photo, index) => (
                    <div key={index}>
                        <PhotoCard
                            path={photo.path}
                            label={photo.label}
                            handlePhotoClick={() => {}}
                            handleImportPhotoClick={() => {}}
                            details={false}
                        />
                    </div>
                ))
            ) : (
                <span>[Aucune photos]</span>
            )}
        </div>
    )
}

export default VuesInput
