import React, { useState } from 'react'

export default function Comment(props) {
    return (
        <div className="comment">
            <p>{props.comment.user}</p>
            <p>{props.comment.text}</p>
        </div>
    )
}
