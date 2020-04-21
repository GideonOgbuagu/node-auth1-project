import React, { useState } from 'react';
import axios from  'axios'


const Register = (props) => {
const [register, setRegister] = useState({
    username: '',
    password: ''
})

const handleChange = e => {
    setRegister({
        ...register,
        [e.target.name]: e.target.value

    })
}


const handleSubmit = e => {
    e.preventDefault();
    axios
        .post("localhost:5500/api/auth/register", register)
        .then(res => {
            //res.data
            // localStorage.setItem('token', res.data.payload)
            props.history.push('/login');
            // setAccount({
            //     username: '',
            //     password: ''
            // })
        })
        .catch(err => console.log("From Register", err))
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={register.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}
                />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;
