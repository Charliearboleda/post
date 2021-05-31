// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

// CONTEXTS
import { useAuth } from '../contexts/AuthContext'

// COMPONENTS
import ProfileView from './ProfileView'

export default function MainPage() {
    const [ error, setError ] = useState("")
    const [ state, setState ] = useState(
        {
            posts: []
        }
    )
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push('/login')
        } catch {
            setError("Failed to log out")
        }
    }


    return (
        <>
            <details>
                <summary>Account Settings</summary>
                <Card>
                    <Card.Body>
                        { error && <Alert variant="danger">{error}</Alert> }
                        { currentUser.email }
                        <Link
                            to="/update-profile"
                            className="btn btn-primary w-100 mt-3"
                        >Update Profile</Link>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    <Button
                        variant="link"
                        onClick={handleLogout}
                    >Log Out</Button>
                </div>
            </details>
            <Link
                to="/add-post"
                className="btn btn-primary w-50 mt-3"
            >Create New Post</Link>
            <ProfileView></ProfileView>

        </>

    )
}
