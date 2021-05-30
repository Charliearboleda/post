// DEPENDENCIES
import React, { useState } from 'react'
import axios from 'axios'
// import { Image } from 'cloudinary-react'

export default function AddPost(props) {
    const [ imageSelected, setImageSelected ] = useState("")
    const [ state, setState ] = useState(
        {
            author: '',
            image: '',
            text: '',
            // liked_by: [0],
            // comments: [0]
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

    const postPost = () => {
        axios // AXIOS 2 START =====
            .post('https://post-ga-api.herokuapp.com/api/posts', state)
            .then(
                (response) => {
                    props.getPosts()
                }
            )
            .catch((err) => {
                console.log(err)
            })
        // AXIOS 2 END =====
    }

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "vutyx5hg")
        axios // AXIOS 1 START =====
            .post(
                "https://api.cloudinary.com/v1_1/aocloud/image/upload",
                formData
            ).then(
                (response) => {
                    setState(
                        {
                            ...state,
                            image: response.data.secure_url
                        }
                    )
                }
            ).then( // for some reason, we can't get postPost() to trigger only AFTER we get a response back from cloudinary
                postPost()
            )
        // AXIOS 1 END =====
    }

    const addPost = (event) => {
        event.preventDefault()
        uploadImage()
    }

    return (
        <div>
            <h2>Add a New Post</h2>
            <form id="add-post-form" onSubmit={ postPost }>
                <label htmlFor="author">Author</label>
                <input
                    type="number"
                    name="author"
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
        </div>
    )

    // return (
    //     <div>
    //         <div>
    //                 <form onSubmit={uploadImage}>
    //                     <input
    //                         type="file"
    //                         onChange={(event) => {
    //                             setImageSelected(event.target.files[0])
    //                         }}
    //                     />
    //                     <input
    //                         type="submit"
    //                         value="upload image"
    //                     />
    //                 </form>
    //                 <Image
    //                     cloudName="aocloud"
    //                     public="https://res.cloudinary.com/aocloud/image/upload/v1622230076/familyguy_uql16m.webp"
    //                 />
    //             </div>
    //
    //         <br />
    //         <br />
    //         <br />
    //         <br />
    //         <h2>Add a New Post</h2>
    //         <form id="add-post-form" onSubmit={addPost}>
    //             <label htmlFor="author">Author</label>
    //             <input
    //                 type="number"
    //                 name="author"
    //                 value={state.author}
    //                 onChange={handleChange}
    //             /><br />
    //             <label htmlFor="image">Image</label>
    //             <input
    //                 type="text"
    //                 name="image"
    //                 value={state.image}
    //                 onChange={handleChange}
    //             /><br />
    //             <label htmlFor="text">Share Something:</label>
    //             <input
    //                 type="text"
    //                 name="text"
    //                 value={state.text}
    //                 onChange={handleChange}
    //             /><br />
    //             <input type="submit" value="Post-It" />
    //         </form>
    //     </div>
    // )
}
