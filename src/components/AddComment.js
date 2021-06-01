import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from "axios"


export default function AddComment(props) {
    const [ state, setState ] = useState({
        user: '',
        post: '',
        text: '',
    })

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

    return (
        <>
            <Form onSubmit={ handleSubmit }>
            <input
                type="textarea"
                value={ state.text }
                name="text"
                onChange={ handleChange }
            />
             <Button
                as="input"
                variant="outline-info"
                type="submit"
                value="Add Comment"
            />
            </Form>
        </>
    )
}
