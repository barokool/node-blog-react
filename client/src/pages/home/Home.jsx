import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

import './style.css'

const ROOT_URL = 'http://localhost:5000/api';


export default function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${ROOT_URL}/posts`)
            setPosts(res.data)
            console.log(res.data)
        }

        fetchPosts()
    }, [])

    return (
        <>
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />

            </div>
        </>
    )
}
