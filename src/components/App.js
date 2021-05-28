import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Signup from './Signup'
import { Container } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext'
import AddPost from './AddPost'
import PostList from './PostList'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Login'
import MainPage from './MainPage'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile'

export default function App() {
    const [state, setState] = useState(
        {
            posts: []
        }
    )

    const getPosts = () => {
        axios
            .get(
                'https://post-ga-api.herokuapp.com/api/posts'
            ).then(
                (response) => {
                    setState({ ...state, posts: response.data })
                },
                (err) => console.log(err)
            )
        // AXIOS END =====
    }

    const handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://post-ga-api.herokuapp.com/api/posts',
                state
            ).then(
                (response) => {
                    getPosts()
                }
            )
        // AXIOS END =====
    }

    const deletePost = (e) => {
        axios
            .delete(
                'https://post-ga-api.herokuapp.com/api/posts/' + e.target.value
            ).then(
                (response) => {
                    getPosts()
                }
            )
        // AXIOS END =====
    }

    useEffect(() => {
        getPosts()
    })

    return (
        <div>
            <Container
                className="d-flex align-itmes-center justify-content-center"
                style={{minHeight: "100vh"}}
            >
                <div
                    className="w-100"
                    style={{maxWidth: "400px"}}
                >
                <Router>
                    <AuthProvider>
                    <Switch>
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <PrivateRoute exact path="/" component={MainPage} />
                    <PrivateRoute path="/update-profile" component={UpdateProfile} />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    </Switch>
                    </AuthProvider>
                </Router>

                </div>
            </Container>

            <AddPost
                getPosts={getPosts}
            ></AddPost>

            <PostList
                posts={state.posts}
                getPosts={getPosts}
                deletePost={deletePost}
                handleChange={handleChange}
            ></PostList>
        </div>
    )

} // App END =======
