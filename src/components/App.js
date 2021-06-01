// DEPENDENCIES
import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'
// import './Styles.css'
// CONTEXTS
import { AuthProvider } from '../contexts/AuthContext'

// COMPONENTS
import AddPost from './AddPost'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import MainPage from './MainPage'
import PrivateRoute from './PrivateRoute'
import Signup from './Signup'
import UpdateProfile from './UpdateProfile'
import UserPostPage from './UserPostPage'

export default function App() {
    return (
        <AuthProvider>
            <div className="body">
                <Container
                    className="d-flex align-itmes-center justify-content-center"
                    style={ {minHeight: "100vh"} }
                > {/* CONTAINER */}
                    <div className="w-100">
                        <Router>
                            <Switch>
                                <Route
                                    path="/signup"
                                    component={ Signup }
                                ></Route>
                                <Route
                                    path="/login"
                                    component={ Login }
                                ></Route>
                                <Route
                                    path="/forgot-password"
                                    component={ ForgotPassword }
                                ></Route>
                                <PrivateRoute
                                    exact path='/user-post-page'
                                    component={ UserPostPage }
                                ></PrivateRoute>
                                <PrivateRoute
                                    exact path="/"
                                    component={ MainPage }
                                ></PrivateRoute>
                                <PrivateRoute exact path='/add-post'
                                    component={ AddPost }
                                ></PrivateRoute>
                                <PrivateRoute
                                    path="/update-profile"
                                    component={ UpdateProfile }
                                ></PrivateRoute>
                            </Switch>
                        </Router>
                    </div>
                </Container>
            </div>
        </AuthProvider>
    )

} // App END =======
