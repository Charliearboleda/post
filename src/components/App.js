// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

// CONTEXTS
import { AuthProvider } from '../contexts/AuthContext'

// COMPONTENTS
import AddPost from './AddPost'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import MainPage from './MainPage'
import PostList from './PostList'
import PrivateRoute from './PrivateRoute'
import Signup from './Signup'
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
                    setState(
                        {
                            ...state,
                            posts: response.data
                        }
                    )
                },
                (err) => console.log(err)
            )
        // AXIOS END =====
    }

    const handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
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
            > {/* CONTAINER */}
                <div
                    className="w-100"
                    style={{maxWidth: "400px"}}
                >{/* DIV */}
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <Route path="/signup" component={Signup} />
                                <Route path="/login" component={Login} />
                                <Route path="/forgot-password" component={ForgotPassword} />
                                <PrivateRoute exact path="/" component={MainPage} />
                                <PrivateRoute path="/update-profile" component={UpdateProfile} />
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
