import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUserData = () => {
            axios
            .get('localhost:5500/api/users/')
            .then(res => {
                //console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log("Something went wrong", err)
            })
        }

        getUserData()
       
    }, [])
    //console.log(data)
    return (
        <div>
            <h1>Users</h1>
            <div className="users-container">
                {users.map(item => (
                    // console.log(item, "From item")
                    <User key={item.id} user={item} />
                ))}
            </div>
        </div>
    )
}

export default Users;