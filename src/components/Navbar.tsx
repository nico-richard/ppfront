'use client'
import React from 'react'
import styles from './Navbar.module.sass'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
    const pathName = usePathname()
    const isActive = (href: string) => pathName === href
    return (
        <div className={styles.navbar}>
            <Link className={`${styles.custom_link} ${isActive('/') ? styles.active : ''}`} href="/">
                Accueil
            </Link>
            <Link className={`${styles.custom_link} ${isActive('/photos') ? styles.active : ''}`} href="/photos">
                Photos
            </Link>
            <Link className={`${styles.custom_link} ${isActive('/vehicles') ? styles.active : ''}`} href="/vehicles">
                Véhicules
            </Link>
            <Link className={`${styles.custom_link} ${isActive('/rechercher') ? styles.active : ''}`} href="/rechercher">
                Rechercher
            </Link>
        </div>
    )
}
