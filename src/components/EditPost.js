import React, { Component } from 'react'
import axios from 'axios'

export default class EditPost extends Component {
    state = {
        author: this.props.post.author,
        image: this.props.post.image,
        text: this.props.post.text,
        liked_by: this.props.post.liked_by,
        comments: this.props.post.comments
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updatePost = (event) => {
        event.preventDefault()
        axios
            .put(
                'https://post-ga-api.herokuapp.com/api/posts/' + this.props.post.id,
                this.state
            ).then(
                (response) => {
                    this.props.getPosts()
                }
            )
        // AXIOS END =====
    }

    render() {
        return (
            <form
                name={this.props.post.id}
                className="edit-post-form"
                onSubmit={this.updatePost}
            >
                <label htmlFor="author">Author</label><br />
                <input
                    type="number"
                    name="author"
                    onChange={this.handleChange}
                /><br />
                <label htmlFor="image">Image</label><br />
                <input
                    type="text"
                    name="image"
                    onChange={this.handleChange}
                /><br />
                <label htmlFor="text">Text</label><br />
                <input
                    type="text"
                    name="text"
                    onChange={this.handleChange}
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
        )
    }
}
