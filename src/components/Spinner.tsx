import React from 'react'
import styles from './Spinner.module.sass'

export default function Spinner() {
    return (
        <div>
            <div className={styles.loading_spinner}></div>
        </div>
    )
}
