import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import './style.css'

const ROOT_URL = 'http://localhost:5000/api';


export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState([])
    const { user } = useContext(Context)
    const [popup, setPopUp] = useState(false)
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")
    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get(`${ROOT_URL}/posts/${path}`)
            console.log(res.data)
            setPost(res.data)
        }
        fetchPost()
    }, [path])

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            await axios.delete(`${ROOT_URL}/posts/${path}`, {
                // dont really understand why it has to be "data"
                data: { username: user.username }
            })
            console.log(post._id)
            console.log(path)
            window.location.replace("/")
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        setPopUp(false)
        try {
            // await axios.put(`${ROOT_URL}/posts/${path}`,{
            // })
            setPopUp(true)
            console.log("Success")
        }
        catch (err) {
            setPopUp(false)
            console.log(err)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`${ROOT_URL}/posts/${path}`, {
                username: user.username,
                title,
                desc
            })
            window.location.replace('/')
            console.log("success changed")
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="single">
            <div className="single-wrapper">
                <h1>{post.title}
                </h1>
                <h3>
                    Author :{" "}
                    <Link to="/" className="author">
                        {post.username}</Link>
                </h3>
                <p>{post.desc}</p>
                <div className="single-h1-edit">
                    {
                        post.username == user.username ? (
                            <>
                                <button className={popup ? 'during-popup' : ""} onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </>
                        ) : ""
                    }
                </div>
                {popup && (
                    <div className="PopUp">
                        {/* x close window */}
                        <button className="popup-x button-popup" onClick={() => setPopUp(false)} >X</button>
                        <div className="pu-content-container">
                            <form className="form" onSubmit={handleSubmit}>
                                <h1>Edit</h1>
                                <div >
                                    <input type="text" placeholder="title" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                                </div>
                                <div >
                                    <textarea
                                        placeholder="tell your story.."
                                        type="text"
                                        onChange={e => setDesc(e.target.value)}
                                    ></textarea>
                                </div>
                                <button className="button-popup" type="submit">Public</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}
