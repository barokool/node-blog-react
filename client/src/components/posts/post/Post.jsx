import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Post({ post }) {
    return (
        <Link to={`/post/${post._id}`}>
            <div className="post ">
                <div className="postInfo">
                    <Link to={`/post/${post._id}`} >
                        <span className="postTitle">
                            {post.title}
                        </span>
                    </Link>
                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="postDesc">
                    {
                        post.desc
                    }
                </p>

            </div >
        </Link>


    )
}
