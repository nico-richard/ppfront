'use client'
import React, { useState } from 'react'
import styles from './PhotoListImport.module.sass'
import Photo from '@/models/Photo.model'
import { PhotoCard } from './PhotoCard'

const PhotoListImport = ({
    photos,
    details,
    handleImportPhotoClick,
}: {
    photos: Photo[]
    details: boolean
    handleImportPhotoClick: (label: string) => void
}) => {
    const handlePhotoClick = () => {}

    return (
        <div className={styles.photolist_import_component}>
            <ul>
                {photos
                    ? photos.map((photo, index) => {
                          return (
                              <li key={index}>
                                  <PhotoCard
                                      path={photo.path}
                                      label={photo.label}
                                      handlePhotoClick={handlePhotoClick}
                                      details={details}
                                      handleImportPhotoClick={handleImportPhotoClick}
                                  />
                              </li>
                          )
                      })
                    : null}
            </ul>
        </div>
    )
}

export default PhotoListImport
