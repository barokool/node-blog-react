import React from 'react'
import './style.css'
import Post from './post/Post'

export default function Posts({ posts }) {
    return (
        <div className="posts card">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}

        </div>
    )
}
