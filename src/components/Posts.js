// import React, { useState } from 'react'

export default function Posts(props) {
    return (
        <div key={ props.post.id }>
            THIS IS Posts.js; USE Post.js
            {/*<h3>Author: { props.post.author }</h3>
            <img src={ props.post.image } />
            <h3>Post: { props.post.text }</h3>
            <details>
                <summary>Edit Post</summary>
                <form name={ props.post.id } onSubmit={ props.updatePost }>
                    <label htmlFor="author">Author</label><br />
                    <input
                        type="number"
                        name="author"
                        onChange={ props.handleChange }
                    /><br />
                    <label htmlFor="image">Image</label><br />
                    <input
                        type="text"
                        name="image"
                        onChange={ props.handleChange }
                    /><br />
                    <label htmlFor="text">Text</label><br />
                    <input
                        type="text"
                        name="text"
                        onChange={ props.handleChange }
                    /><br />
                    <input
                        type="hidden"
                        name="liked_by"
                    />
                    <input
                        type="hidden"
                        name="comments"
                    />
                    <input type="submit" value="Update Post" />
                </form>
            </details>
            <button
                value={ props.post.id }
                onClick={ props.deletePost }
            >DELETE</button> */}
        </div>
    )
}
