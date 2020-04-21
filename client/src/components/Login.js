import React, { useState } from 'react';
import axios from  'axios'


const Login = (props) => {
const [login, setLogin] = useState({
    username: '',
    password: ''
})

const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value

    })
}


const handleSubmit = e => {
    e.preventDefault();
    axios
        .post("localhost:5500/api/auth/login", login)
        .then(res => {
            //res.data
            // localStorage.setItem('token', res.data.payload)
            props.history.push('/users');
            // setAccount({
            //     username: '',
            //     password: ''
            // })
        })
        .catch(err => console.log("From Login", err))
}

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </>
    )
}

export default Login;
