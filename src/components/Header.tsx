import React from 'react'
import styles from './Header.module.sass'
import Image from 'next/image'
import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'
import UserInfos from './UserInfos'
import { auth } from '@/../auth'

export const Header = async () => {
    const session = await auth()

    return (
        <div className={styles.header}>
            <Image
                src="/favicon.ico"
                alt=""
                width={0}
                height={0}
                sizes="100"
                style={{ width: '6%', minWidth: '80px', height: 'auto', marginLeft: '5%' }}
            />
            <h1>Photos pompier</h1>
            <div className={styles.sign_in_out_container}>
                <UserInfos />
                {!session ? (
                    <div className={styles.sign_in_out}>
                        <SignInButton />
                    </div>
                ) : (
                    <div className={styles.sign_in_out}>
                        <SignOutButton />
                    </div>
                )}
            </div>
        </div>
    )
}
