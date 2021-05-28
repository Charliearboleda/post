import React, { Component, useState } from 'react'
import { render } from 'react-dom'
import { firebase } from '../firebase'
import axios from 'axios'

export default function AddPost(props) {
    const [state, setState] = useState({
        author: '',
        image: '',
        text: '',
        liked_by: [0],
        comments: [0]
    })

    const handleChange = (event) => {
        setState(
            {
                ...state,
                [event.target.name]: event.target.value
            }
        )
    }

    const addPost = (event) => {
        event.preventDefault()
        axios
            .post('https://post-ga-api.herokuapp.com/api/posts', state)
            .then(
                (response) => {
                    props.getPosts()
                }
            )
            .catch((err) => {
                console.log(err);
            })
        // AXIOS END =====
    }


    addImage = (event) => {
        this.uploadImage(event.target.files)
    }

    uploadImage = (files) => {
        const formData = new FormData()
        console.log(files[0])
    }

    return (
        <div>
            <div>
                    <form onSubmit={this.uploadImage}>
                        <input
                            type="file"
                            onChange={this.addImage}
                        />
                        <input
                            type="submit"
                            value="upload image"
                        />
                    </form>
                    <img></img>
                </div>
            <h2>Add a New Post</h2>
            <form id="add-post-form" onSubmit={addPost}>
                <label htmlFor="author">Author</label>
                <input
                    type="number"
                    name="author"
                    value={state.author}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="image">Image</label>
                <input
                    type="text"
                    name="image"
                    value={state.image}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="text">Share Something:</label>
                <input
                    type="text"
                    name="text"
                    value={state.text}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Post-It" />
            </form>
        </div>
    )
}
