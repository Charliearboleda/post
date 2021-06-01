import React, { useState } from 'react'

export default function Comment(props) {
    return (
        <div className="comment">
            { props.allUsers.map(
                (user) => {
                    return user.id === props.comment.user
                        ? <p>{user.displayName}</p>
                        : null
                }
            )}
            <p>{props.comment.text}</p>
        </div>
    )
}
