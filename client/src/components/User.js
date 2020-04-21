import React from 'react'

const User = (props) => {
    return (
        <div className="user">
            <p>{props.user.name}</p>
        </div>
    )
}

export default User;