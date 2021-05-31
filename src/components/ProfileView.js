// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// COMPONENTS
import PostList from './PostList'

export default function ProfileView() {
    const [ state, setState ] = useState(
        {
            posts: []
        }
    )

    const handleChange = (e) => {
        this.setState(
            {
                [ e.target.name ]: e.target.value
            }
        )
    }

    const deletePost = (e) => {
        axios
            .delete(
                'http://localhost:8000/api/posts/' + e.target.value
            ).then(
                (response) => {
                    getPosts()
                }
            )
        // AXIOS END =====
    }

    const getPosts = () => {
        axios
            .get(
                'http://localhost:8000/api/posts'
            ).then(
                (response) => {
                    setState(
                        {
                            ...state,
                            posts: response.data
                        }
                    )
                },
                (err) => console.log(err)
            )
        // AXIOS END =====
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <PostList
                posts={ state.posts }
                getPosts={ getPosts }
                deletePost={ deletePost }
                handleChange={ handleChange }
            ></PostList>
        </>
    )
}
