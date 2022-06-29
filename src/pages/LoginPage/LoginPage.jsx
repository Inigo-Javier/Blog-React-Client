import { Link } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type="text" placeholder='Enter your email...'></input>
                <label>Password</label>
                <input type="password" placeholder='Enter your password...'></input>
                <button className='loginButton'>Login</button>
            </form>
            <button className='loginRegisterButton'>
                <Link className='Link' to="/registro">Register</Link>
            </button>
        </div>
    )
}
