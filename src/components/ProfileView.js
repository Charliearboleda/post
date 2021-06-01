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

    const getPosts = () => {
        axios
            .get(
                'https://post-ga-api.herokuapp.com/api/posts'
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

    function deletePost(event) {
        axios
            .delete(
                'https://post-ga-api.herokuapp.com/api/posts/' + event.target.value
            ).then(
                (response) => {
                    getPosts()
                }
            )
        // AXIOS END =====
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <PostList
                posts={state.posts}
                getPosts={ getPosts } // THIS GETS DRILLED 4 LEVELS DOWN TO EDIT POST; CONVERT TO USING CONTEXT?
                handleChange={ handleChange }
                deletePost={ deletePost }
            ></PostList>

        </>
    )
}
