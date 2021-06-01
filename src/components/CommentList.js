// DEPENDENCIES
import React, { useState } from 'react'

// COMPONENTS
import Comment from './Comment'

export default function CommentList(props) {
    return (
        <>
            <p>This is the comment list</p>
            {props.comments.map((comment) => {
                <Comment
                    comment={comment}
                />
            })}
        </>
    )
}
