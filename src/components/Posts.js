import React, { Component } from 'react'

export default class Posts extends Component {

    render() {
        return (
            <div>
                <div key={this.props.posts.id}>
                    <h3>Author: {this.props.posts.author}</h3>
                    <img src={this.props.posts.image} />
                    <h3>Post: {this.props.posts.text}</h3>
                    <details>
                        <summary>Edit Post</summary>
                            <form id={this.props.posts.id} onSubmit={this.props.updatePost}>
                                <label htmlFor="author">Author</label>
                                <br />
                                <input type="number" id="author" onChange={this.props.handleChange} />
                                <br />
                                <label htmlFor="image">Image</label>
                                <br />
                                <input type="text" id="image" onChange={this.props.handleChange} />
                                <br />
                                <label htmlFor="text">Text</label>
                                <br />
                                <input type="text" id="text" onChange={this.props.handleChange} />
                                <br />
                                <input type="hidden" id="like_by" onChange={this.props.handleChange} />
                                <input type="hidden" id="comments" onChange={this.props.handleChange} />
                                <input type="submit" value="Update Post" />
                            </form>
                    </details>
                    <button value={this.props.posts.id} onClick={this.props.deletePost}>DELETE</button>
                </div>
            </div>
        )
    }
}
