// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from "axios"

// CONTEXTS
// import { useAuth } from '../contexts/AuthContext'

export default function AddComment(props) {
    // const { currentUser } = useAuth()
    const [ state, setState ] = useState(
        {
            user: props.currentUser.id,
            post: props.postId,
            text: '',
        }
    )

    const handleChange = (event) => {
        setState(
            {
                ...state,
                [ event.target.name ]: event.target.value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://post-ga-api.herokuapp.com/api/comments',
                state
            ).then(
                (response) => {
                    props.getComments()
                }
            )
        // AXIOS END =====
    }

    useEffect(() => {
        setState(
            {
                ...state,
                user: props.currentUser.id
            }
        )
    }, [props])

    return (
        <Form className="add-comment" onSubmit={ handleSubmit }>
            <input
                type="textarea"
                value={ state.text }
                name="text"
                onChange={ handleChange }
                required
            />
            <Button
                as="input"
                variant="outline-info"
                type="submit"
                value="Add Comment"
            />
        </Form>
    )
}
