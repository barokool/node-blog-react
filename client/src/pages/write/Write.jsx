import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import './style.css'


const ROOT_URL = 'http://localhost:5000/api';


export default function Write() {
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (title === '' || desc === '')
            setErr(true)
        else setErr(false)
        try {
            const res = await axios.post(`${ROOT_URL}/posts/`, {
                username: user.username,
                title,
                desc
            })

            console.log(res.data)
            window.location.replace("/")
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="write">
            {err && <span className="span-popup" style={{ color: "red", marginTop: "10px" }}>Please fill out the title and the description!</span>}

            <form className="write-form" onSubmit={handleSubmit}>
                <div className="write-form-group">
                    <input className="write-input" type="text" placeholder="title" autoFocus={true} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="write-form-group">
                    <textarea
                        placeholder="tell your story.."
                        type="text"
                        className="write-input write-text"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="write-submit" type="submit">Public</button>
            </form>
        </div>
    )
}
