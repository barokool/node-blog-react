import React, { useContext } from 'react'
import './style.css'
import Logo from '../../images/NovelSky.png'
import { Link } from 'react-router-dom'
import Avatar from '../avata-dropdown/Avatar'
import { Context } from '../../context/Context'

export default function TopBar() {
    const { user } = useContext(Context)
    return (
        <div className="top-bar">
            <div className="top-left">
                <Link to="/">
                    <img src="https://o.remove.bg/downloads/64ac8665-5bca-49d7-b6dc-0429ca5eebb2/HlkmRDO-_400x400-removebg-preview.png" width="60" height="60" alt="logo" />
                </Link>
            </div>
            <div className="top-center">

            </div>
            <div className="top-right">
                {
                    user ? (
                        <Avatar />
                    ) :
                        (
                            <>
                                <Link to="/login"><button>Sign in</button></Link>
                                <Link to="/register"> <button>Sign up</button></Link>
                            </>
                        )
                }

            </div>

        </div>
    )
}
