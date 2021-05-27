import React, { Component } from 'react'

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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addPost(this.state) // This doesn't exist in App
    }

    render() {
        return (
            <div>
                <h2>Add a New Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="author">Author</label>
                    <input
                        type="number"
                        name="author"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        name="image"
                        onChange={this.handleChange}
                    />
                    <br />
                    <label htmlFor="text">Share Something:</label>
                    <input
                        type="text"
                        name="text"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type="submit" value="Post-It" />
                </form>
            </div>
        )
    }
}
