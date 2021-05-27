import React, { Component } from 'react'
import axios from 'axios'
import Signup from './Signup'
import { Container } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext'
import AddPost from './AddPost'
import PostList from './PostList'

class App extends Component {
    state = {
        posts: []
    }

    getPosts = () => {
        axios
            .get(
                'https://post-ga-api.herokuapp.com/api/posts'
            ).then(
                (response) => this.setState({posts: response.data}),
                (err) => console.log(err)
            )
        // AXIOS END =====
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://post-ga-api.herokuapp.com/api/posts',
                this.state
            ).then(
                (response) => {
                    this.getPosts()
                }
            )
        // AXIOS END =====
    }

    // updatePost = (postId, stateObject) => {
    //     axios
    //         .put(
    //             'https://post-ga-api.herokuapp.com/api/posts/' + postId,
    //             stateObject
    //         ).then(
    //             (response) => {
    //                 this.getPosts()
    //                 this.setState({
    //                     author : '',
    //                     image: '',
    //                     text: '',
    //                     liked_by : [0],
    //                     comments: [0]
    //                 })
    //             }
    //         )
    //     // AXIOS END =====
    // }

    deletePost = (e) => {
        axios
            .delete(
                'https://post-ga-api.herokuapp.com/api/posts/' + e.target.value
            ).then(
                (response) => {
                    this.getPosts()
                }
            )
        // AXIOS END =====
    }

    componentDidMount = () => {
        this.getPosts()
    }

    render = () => {
        return (
            <div>
                {/*<AuthProvider>
                    <Container
                        className="d-flex align-itmes-center justify-content-center"
                        style={{minHeight: "100vh"}}
                    >
                        <div
                            className="w-100"
                            style={{maxWidth: "400px"}}
                        >
                            <Signup />
                        </div>
                    </Container>
                </AuthProvider>*/}

                <AddPost
                    addPost={this.addPost}
                    getPosts={this.getPosts}
                ></AddPost>

                <PostList
                    posts={this.state.posts}
                    getPosts={this.getPosts}
                    deletePost={this.deletePost}
                    handleChange={this.handleChange}
                ></PostList>
            </div>
        )
    }
} // App END =======

export default App
