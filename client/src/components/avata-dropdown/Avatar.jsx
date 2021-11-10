import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDetectOutsideClick } from './useDetectOutsideClick'
import './style.css'
import { Context } from '../../context/Context';
export default function Avatar() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const { dispatch } = useContext(Context)
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch({ type: "LOGOUT" })
    }
    const { user } = useContext(Context)

    return (
        <div className="container">
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                    <span>{user.username}</span>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        alt="User avatar"
                    />
                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        <li>
                            <Link className="tags" to="/write">Write</Link>
                        </li>
                        <li><Link className="tags" to='/'>Posts</Link></li>
                        <li>
                            <Link to="/setting">Setting</Link>
                        </li>
                        <li>
                            <a onClick={handleLogout}>Log out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
