import React, { Component } from 'react'

export default class <COMPONENT NAME> extends Component {
    state = {
        null
    }

    render() {
        return (
            <div className="post-list" >
                {this.state.posts.map(
                    (post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                updatePost={this.props.updatePost}
                                deletePost={this.props.deletePost}
                                handleChange={this.props.handleChange}
                            />
                        )
                    }
                )}
            </div>
        )
    }
}
