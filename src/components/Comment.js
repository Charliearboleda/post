import React, { useState } from 'react'

export default function Comment(props) {
    return (
        <>
            <p>{props.comment.author}</p>
            <p>{props.comment.text}</p>
        </>
    )
}
