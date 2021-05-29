// DEPENDENCIES
import React, { useState } from 'react'
import axios from 'axios'

export default function EditPost(props) {
    const [ state, setState ] = useState(
        {
            author: props.post.author,
            image: props.post.image,
            text: props.post.text,
            liked_by: props.post.liked_by,
            comments: props.post.comments
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

    const updatePost = (event) => {
        event.preventDefault()
        axios
            .put(
                'https://post-ga-api.herokuapp.com/api/posts/' + props.post.id,
                state
            ).then(
                (response) => {
                    props.getPosts()
                }
            )
        // AXIOS END =====
    }

    return (
        <form
            name={ props.post.id }
            className="edit-post-form"
            onSubmit={ updatePost }
        >
            <label htmlFor="author">Author</label><br />
            <input
                type="number"
                name="author"
                onChange={ handleChange }
            /><br />
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
            <input type="submit" value="Update Post" />
        </form>
    )
}
