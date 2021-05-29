// import React, { useState } from 'react'
import Post from './Post'
import Comment from './Comment'
export default function PostList(props) {
    return (
        <div className="post-list" >
            {props.posts.map(
                (post) => {
                    return (
                        <>
                        <Post
                            key={ post.id }
                            post={ post }
                            getPosts={ props.getPosts }
                            deletePost={ props.deletePost }
                        />
                        <Comment />
                        </>
                    )
                }
            )}
        </div>
    )
}
