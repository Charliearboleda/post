// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// COMPONENTS
import EditPost from './EditPost'
import CommentList from './CommentList'
import AddComment from './AddComment'
import { Button } from 'react-bootstrap'


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
        <div className="post" key={ props.post.id }>
            <h3>Author: { props.post.user }</h3>
            {props.post.image !== ""
                ? <img src={ props.post.image } alt={ props.post.text } />
                : null
            }
            <h5>{ props.post.text }</h5>
            <CommentList
                comments={state.comments}
            ></CommentList>
            <AddComment
                postId={ props.post.id }
                getComments={ getComments }
            ></AddComment>
            <details id="edit-post-dropdown">
                <summary>Edit Post</summary>
                <EditPost
                    post={ props.post }
                    getPosts={ props.getPosts }
                ></EditPost>
                <Button
                    variant="danger"
                    className="delete-btn"
                    value={ props.post.id }
                    onClick={ props.deletePost }
                >Delete</Button>
            </details>
        </div>
    )
}
