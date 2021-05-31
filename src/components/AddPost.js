// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'
// import { Image } from 'cloudinary-react'

// CONTEXTS
import { useAuth } from '../contexts/AuthContext'

export default function AddPost(props) {
    const [ imageSelected, setImageSelected ] = useState("")
    const history = useHistory()
    const [ state, setState ] = useState(
        {
            user: '',
            image: '',
            text: ''
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

    const uploadImage = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "vutyx5hg")
        console.log('uploading image') // REMOVE BEFORE WEDNESDAY ==================
        axios // AXIOS (CLOUDINARY) START =====
            .post(
                "https://api.cloudinary.com/v1_1/aocloud/image/upload",
                formData
            ).then(
                (response) => {
                    console.log('image uploaded; setting state') // REMOVE BEFORE WEDNESDAY ==================
                    setState(
                        {
                            ...state,
                            image: response.data.secure_url
                        }
                    )
                    return response.data.secure_url
                }
            )
            history.push('/')
        // AXIOS (CLOUDINARY) END =====
    }

    const postPost = () => {
        axios // AXIOS (POSTS API) START =====
            .post('https://post-ga-api.herokuapp.com/api/posts', state)
            .then(
                (response) => {
                    console.log('resetting the form') // REMOVE BEFORE WEDNESDAY ==================
                    document.getElementById('add-post-form').reset()
                    console.log('got posts; resetting state') // REMOVE BEFORE WEDNESDAY ==================
                    setState(
                        {
                            user: '',
                            image: '',
                            text: ''
                        }
                    )
                    props.getPosts()
                }
            )
            .catch((err) => {
                console.log(err)
            })
        // AXIOS (POSTS API) END =====
    }

    // JOSH'S SLEEP IDEA #1
    // const setImage = (event) => {
    //     event.preventDefault()
    //     return new Promise((resolve, reject) => {
    //         resolve(uploadImage())
    //     }).then((res) => {
    //         console.log(res)
    //         postPost()
    //     }).catch((error) => {
    //         console.log(error)
    //     })
    // }

    // JOSH'S SLEEP IDEA #2
    useEffect(() => {
        if (state.image !== '') {
            postPost()
        }
    }, [state.image])

    return (
        <div>
            <h2>Add a New Post</h2>
            <form id="add-post-form" onSubmit={ uploadImage }>
                <label htmlFor="author">Author</label>
                <input
                    type="number"
                    name="user"
                    value={ state.author }
                    onChange={ handleChange }
                /><br /><br />

                <input
                    type="file"
                    onChange={(event) => {
                        setImageSelected(event.target.files[0])
                    }}
                />

                <label htmlFor="text">Share Something:</label>
                <input
                    type="text"
                    name="text"
                    value={ state.text }
                    onChange={ handleChange }
                /><br /><br />
                <input type="submit" value="Post-It" />
            </form>
            <Link
            to="/"
            className="btn btn-primary w-50 mt-3"
            >Cancel</Link>
        </div>
    )
}
