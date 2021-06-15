import {useState} from 'react'
import axios from 'axios';
import {setUser} from '../redux/authReducer';
import {connect} from 'react-redux';

const Auth = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = () => {
        axios.post('/auth/register', {email, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)
            props.history.push('/products')
        })
        .catch(err => console.log(err))
    }
    const handleLogin = () => {
        axios.post('/auth/login', {email, password})
        .then((res) => {
            console.log(res.data)
            props.setUser(res.data)
            props.history.push('/products')
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='log-in'>
        <h1>Sign in</h1>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Register</button>
        </div>
    )
}



export default connect(null, {setUser})(Auth)