// import React, { useState } from 'react'
import Post from './Post'

export default function PostList(props) {
    return (
        <div className="post-list" >
            {props.posts.map(
                (post) => {
                    return (
                        <Post
                            key={post.id}
                            post={post}
                            getPosts={props.getPosts}
                            deletePost={props.deletePost}
                        />
                    )
                }
            )}
        </div>
    )
}
