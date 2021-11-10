import './style.css'
import { useContext, useRef, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import user from '../../images/username.png'
import pass from '../../images/password.png'
import { Link } from 'react-router-dom'
const ROOT_URL = 'http://localhost:5000/api';


export default function Login() {
    const userRef = useRef()
    const passwordRef = useRef()
    const { dispatch } = useContext(Context)
    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setErr(false)
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axios.post(`${ROOT_URL}/auth/login`, {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            console.log(res.data)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        }
        catch (err) {
            dispatch({ type: "LOGIN_FAILURE" })
            setErr(true)
        }
    }
    return (
        <div class="align">

            <div className="grid">
                <form className="form login" onSubmit={handleSubmit}>
                    <div class="form__field">
                        <label for="login__username">
                            <img src={user} alt="username" />
                            <span span class="hidden">Username</span></label>
                        <input ref={userRef} autocomplete="username" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required />
                    </div>
                    <div class="form__field">
                        <label for="login__password">
                            <img width={30} src={pass} alt="password" />
                            <span class="hidden">Password</span></label>
                        <input id="login__password" type="password" name="password" class="form__input" placeholder="Password" required ref={passwordRef} />
                    </div>
                    <div class="form__field">
                        <input className="loginButton" type="submit" value="submit" />
                        {err && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
                    </div>

                </form>


                <p class="text--center">Not a member? <Link to="/register">Sign up now</Link> </p>
            </div>


        </div>

    );
}