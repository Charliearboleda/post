// DEPENDENCIES
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'


export default function EditPost(props) {
    const [ state, setState ] = useState(
        {
            user: props.post.user,
            image: props.post.image,
            text: props.post.text,
            liked_by: props.post.liked_by,
            comments: props.post.comments
        }
    )
    const { getPosts } = useAuth()

    const handleChange = (event) => {
        setState(
            {
                ...state,
                [ event.target.name ]: event.target.value
            }
        )
    }

    const updatePost = (event) => {
        event.preventDefault()
        axios
            .put(
                'https://post-ga-api.herokuapp.com/api/posts/' + props.post.id,
                state
            ).then(
                (response) => {
                    props.getPosts()
                    document.getElementById('edit-' + event.target.name).reset()
                }
            )
        // AXIOS END =====
    }

    return (
        <form
            name={ props.post.id }
            id={"edit-" + props.post.id}
            onSubmit={ updatePost }
        >
            <label htmlFor="image">Image</label><br />
            <input
                type="text"
                name="image"
                onChange={ handleChange }
            /><br />
            <label htmlFor="text">Text</label><br />
            <input
                type="text"
                name="text"
                onChange={ handleChange }
            /><br />
            <Button
                as="input"
                className="update-post-btn"
                type="submit"
                value="Update"
            />
        </form>
    )
}
