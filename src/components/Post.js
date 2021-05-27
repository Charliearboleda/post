import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div key={this.props.post.id}>
                <h3>Author: {this.props.post.author}</h3>
                <img src={this.props.post.image} alt={this.props.post.text} />
                <h3>Post: {this.props.post.text}</h3>
                <details>
                    <summary>Edit Post</summary>
                    <form name={this.props.post.id} onSubmit={this.props.updatePost}>
                        <label htmlFor="author">Author</label><br />
                        <input
                            type="number"
                            name="author"
                            onChange={this.props.handleChange}
                        /><br />
                        <label htmlFor="image">Image</label><br />
                        <input
                            type="text"
                            name="image"
                            onChange={this.props.handleChange}
                        /><br />
                        <label htmlFor="text">Text</label><br />
                        <input
                            type="text"
                            name="text"
                            onChange={this.props.handleChange}
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
                <button value={this.props.post.id} onClick={this.props.deletePost}>DELETE</button>
            </div>
        )
    }
}
