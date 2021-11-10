import React, { useContext, useRef, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import './style.css'
import axios from 'axios'
import { useLocation } from 'react-router'


const ROOT_URL = 'http://localhost:5000/api';


export default function Setting() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const { user } = useContext(Context)
    const [password, setPassword] = useState("")
    const [isTrue, setIsTrue] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsTrue(false)
        try {
            const updatedUser = {
                user: user._id,
                password: password
            }
            await axios.put(`${ROOT_URL}/users/${user._id}`, updatedUser)
            console.log("success updated")
            setIsTrue(true)
        }
        catch (err) {
            console.log(err)
            setIsTrue(false)
        }
    }

    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                </div>
                <form className="settingsForm" onSubmit={handleSubmit}>
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                    {isTrue && <span style={{ color: "red", marginTop: "10px" }}>Password has been changed!!!</span>}
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
