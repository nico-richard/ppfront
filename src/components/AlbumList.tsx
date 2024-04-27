import React from 'react'
import styles from './AlbumList.module.sass'
import { Album } from '@/models/Album.model'

const AlbumList = ({ albums, fetchPhotos }: { albums: Album[]; fetchPhotos: (albumId: string) => void }) => {
    return (
        <div className={styles.album_button_list}>
            {albums ? (
                albums.map((album) => {
                    return (
                        <button key={album.id} onClick={() => fetchPhotos(album.id)}>
                            {album.title}
                        </button>
                    )
                })
            ) : (
                <h3>Non authentifié</h3>
            )}
        </div>
    )
}

export default AlbumList
