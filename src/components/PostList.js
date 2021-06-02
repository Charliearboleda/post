// DEPENDENCIES
import React, { useEffect } from 'react'

// CONTEXTS
import { useAuth } from '../contexts/AuthContext'

// COMPONENTS
import Post from './Post'

export default function PostList(props) {
    const { allUsers } = useAuth()

    return (
        <div className="post-list" >
            <a href="/" className="home-link">Post</a>
            {props.posts.map(
                (post) => {
                    return (
                        <Post
                            key={ post.id }
                            post={ post }
                            allUsers={ allUsers }
                            getPosts={ props.getPosts }
                            deletePost={ props.deletePost }
                        />
                    )
                }
            )}
        </div>
    )
}
