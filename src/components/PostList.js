import React, { Component } from 'react'
import Post from './Post'

export default class PostList extends Component {
    render() {
        return (
            <div className="post-list" >
                {this.props.posts.map(
                    (post) => {
                        return (
                            <Post
                                key={post.id}
                                post={post}
                                getPosts={this.props.getPosts}
                                deletePost={this.props.deletePost}
                            />
                        )
                    }
                )}
            </div>
        )
    }
}
