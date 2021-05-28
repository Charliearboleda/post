import React, { Component, useState } from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'

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
    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = (e) => {
        e.preventDefault()
        const formData = new FormData()
        // console.log(imageSelected)
        formData.append("file", imageSelected)
        formData.append("upload_preset", "vutyx5hg")

        axios.post("https://api.cloudinary.com/v1_1/aocloud/image/upload", formData).then((response) => {
            console.log(response)
        })
    }
    return (
        <div>
            <div>
                    <form onSubmit={uploadImage}>
                        <input
                            type="file"
                            onChange={(event) => {
                                setImageSelected(event.target.files[0])
                            }}
                        />
                        <input
                            type="submit"
                            value="upload image"
                        />
                    </form>
                    <Image
                        cloudName="aocloud"
                        public="https://res.cloudinary.com/aocloud/image/upload/v1622230076/familyguy_uql16m.webp"
                    />
                </div>

            <br />
            <br />
            <br />
            <br />
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
