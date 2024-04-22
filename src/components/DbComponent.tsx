'use client'
import React from 'react'

const DbComponent = ({ post, handleAddPost }: { post: any; handleAddPost: () => void }) => {
    return (
        <div>
            <h1>Db</h1>
            <p>{JSON.stringify(post)}</p>
            <button onClick={() => handleAddPost()}>Add Post</button>
        </div>
    )
}

export default DbComponent
