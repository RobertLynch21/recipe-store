import {useState} from 'react'
import axios from 'axios';
import {setUser} from '../redux/authReducer';
import {connect} from 'react-redux';

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = () => {
        axios.post('auth/register')
    }
    const handleLogin = () => {}
    return(
        <div>
        <h1>Register with Email And Password</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button>Login</button>
        <button>Register</button>
        </div>
    )
}



export default connect(null, {setUser})(Auth)