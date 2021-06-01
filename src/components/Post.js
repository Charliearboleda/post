// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// COMPONENTS
import EditPost from './EditPost'
import CommentList from './CommentList'
import AddComment from './AddComment'

export default function Post(props) {
    const [state, setState] = useState(
        {
            comments: []
        }
    )

    const getComments = () => {
        axios
            .get("https://post-ga-api.herokuapp.com/api/comments")
            .then((response) => {
                setState(
                    {
                        comments: response.data
                    }
                )
            })
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div key={ props.post.id }>
            <h3>Author: { props.post.user }</h3>
            <img src={ props.post.image } alt={ props.post.text } />
            <h3>Post: { props.post.text }</h3>
            <CommentList
                comments={state.comments}
            ></CommentList>
            <AddComment
                postId={ props.post.id }
                getComments={ getComments }
            ></AddComment>
            <details>
                <summary>Edit Post</summary>
                <EditPost
                    post={ props.post }
                    getPosts={ props.getPosts }
                ></EditPost>
            </details>
            <button
                value={ props.post.id }
                onClick={ props.deletePost }
            >DELETE</button>
        </div>
    )
}
