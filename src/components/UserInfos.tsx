import React from 'react'
import { auth } from '@/../auth'
import Image from 'next/image'
import styles from './UserInfos.module.sass'

const UserInfos = async () => {
    const session = await auth()
    if (!session || !session.user) {
        return null
    }
    return (
        <div className={styles.user_infos}>
            <Image src={session.user?.image as string} width={30} height={30} alt="" style={{ borderRadius: '999px' }} />
            <h5>{session.user?.name}</h5>
        </div>
    )
}

export default UserInfos
