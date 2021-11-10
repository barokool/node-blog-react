import axios from "axios";
import { useState } from "react";
import user from '../../images/username.png'
import eml from '../../images/email.png'
import pass from '../../images/password.png'

const ROOT_URL = 'http://localhost:5000/api';


export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post(`${ROOT_URL}/auth/register`, {
                username,
                email,
                password,
            });
            if (res.data) {
                alert("Success, wait 2 seconds to move to login page")
                setTimeout(() => {
                    window.location.replace("/login");
                }, 2000)
            }
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div class="align">

            <div className="grid">
                <form className="form login" onSubmit={handleSubmit}>
                    <div class="form__field">
                        <label for="login__username">
                            <img src={user} alt="username" />
                            <span span class="hidden">Username</span></label>
                        <input onChange={(e) => setUsername(e.target.value)} autocomplete="username" id="login__username" type="text" name="username" class="form__input" placeholder="Username" required />
                    </div>
                    <div class="form__field">
                        <label for="login__username">
                            <img src={eml} width={30} alt="email" />
                            <span span class="hidden">Email</span></label>
                        <input onChange={(e) => setEmail(e.target.value)} autocomplete="email" id="login__username" type="text" name="email" class="form__input" placeholder="Email" required />
                    </div>
                    <div class="form__field">
                        <label for="login__password">
                            <img width={30} src={pass} alt="password" />
                            <span class="hidden">Password</span></label>
                        <input onChange={(e) => setPassword(e.target.value)} id="login__password" type="password" name="password" class="form__input" placeholder="Password" required />
                    </div>
                    <div class="form__field">
                        <input className="loginButton" type="submit" value="Register" />
                        {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>}
                    </div>
                </form>

            </div>
        </div>

    );
}