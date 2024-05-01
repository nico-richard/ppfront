import React from 'react'
import styles from './AlbumList.module.sass'
import { Album } from '@/models/Album.model'
import PPButton from './common/PPButton'

const AlbumList = ({ albums, fetchPhotos }: { albums: Album[]; fetchPhotos: (albumId: string) => void }) => {
    return (
        <div className={styles.album_button_list}>
            {albums ? (
                albums.map((album) => {
                    return (
                        <div key={album.id}>
                            <PPButton label={album.title} onClick={() => fetchPhotos(album.id)}></PPButton>
                        </div>
                    )
                })
            ) : (
                <h3>Non authentifié</h3>
            )}
        </div>
    )
}

export default AlbumList
