import React from 'react'
import prisma from '../../../lib/prisma'
import DbComponent from '@/components/DbComponent'

const Db = async () => {
    const data = await prisma.post.findFirst({
        where: { published: true },
        include: {
            author: {
                select: { name: true },
            },
        },
    })

    const handleAddPost = async () => {
        'use server'
        const data = await prisma.post.create({
            data: { id: '2', title: 'title2', authorId: '1' },
        })
    }

    return <DbComponent post={data} handleAddPost={handleAddPost} />
}

export default Db
