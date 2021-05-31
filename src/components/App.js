// DEPENDENCIES
import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios'

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
        <>
            <Container
                className="d-flex align-itmes-center justify-content-center"
                style={ {minHeight: "100vh"} }
            > {/* CONTAINER */}
                <div
                    className="w-100"
                    style={ {maxWidth: "400px"} }
                >{/* DIV */}
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <Route path="/signup" component={ Signup } />
                                <Route path="/login" component={ Login } />
                                <Route path="/forgot-password" component={ ForgotPassword } />
                                <PrivateRoute exact path='/user-post-page' component={UserPostPage} />
                                <PrivateRoute exact path="/" component={ MainPage } />
                                <PrivateRoute exact path='/add-post' component={AddPost} />
                                <PrivateRoute path="/update-profile" component={ UpdateProfile } />
                            </Switch>
                        </AuthProvider>

                    </Router>
                </div>
            </Container>
        </>
    )

} // App END =======
