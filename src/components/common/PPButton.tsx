import React, { MouseEventHandler } from 'react'
import styles from './PPButton.module.sass'

interface PPButtonProps {
    label: string
    type?: 'button' | 'submit'
    onClick?: MouseEventHandler
}

const PPButton = ({ label, type, onClick }: PPButtonProps) => {
    return (
        <button type={type} className={styles.ppbutton} onClick={onClick}>
            {label}
        </button>
    )
}

export default PPButton
