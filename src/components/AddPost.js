import React, { Component } from 'react'
import axios from 'axios'

export default class AddPost extends Component {
    state = {
        author : '',
        image: '',
        text: '',
        liked_by : [0],
        comments: [0],
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    addPost = (event) => {
        event.preventDefault()
        axios
            .post('https://post-ga-api.herokuapp.com/api/posts', this.state)
            .then(
                (response) => {
                    this.props.getPosts()
                }
            )
            .catch((err) => {
                console.log(err);
            })
        // AXIOS END =====
    }

    render() {
        return (
            <div>
                <h2>Add a New Post</h2>
                <form onSubmit={this.addPost}>
                    <label htmlFor="author">Author</label>
                    <input
                        type="number"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="text">Share Something:</label>
                    <input
                        type="text"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type="submit" value="Post-It" />
                </form>
            </div>
        )
    }
}
