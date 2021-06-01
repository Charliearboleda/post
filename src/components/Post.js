// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// CONTEXTS
import { useAuth } from '../contexts/AuthContext'

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
    const { currentUser } = useAuth()

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
                postId={ props.post.id }
            ></CommentList>
            <AddComment
                postId={ props.post.id }
                getComments={ getComments }
            ></AddComment>
            {props.post.user === currentUser.id
                ? <details id="edit-post-dropdown">
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
                : null
            }
        </div>
    )
}
