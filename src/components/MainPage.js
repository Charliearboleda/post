// DEPENDENCIES
import React, { useState, useEffect } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

// CONTEXTS
import { useAuth } from '../contexts/AuthContext'

// COMPONENTS
import ProfileView from './ProfileView'

export default function MainPage() {
    const [ error, setError ] = useState("")
    const { currentUser, setCurrentUser, allUsers, setAllUsers, logout } = useAuth()
    const history = useHistory()
    const [ state, setState ] = useState(
        {
            posts: []
        }
    )

    async function handleLogout() {
        setError("")
        try {
            await logout()
            history.push('/login')
        } catch {
            setError("Failed to log out")
        }
    }

    useEffect(() => {
        const set = async () => {
            try {
                await setAllUsers()
                for (let i = 0; i < allUsers.length; i++) {
                    if (allUsers[i].email === currentUser.email) {
                        setCurrentUser({
                            ...currentUser,
                            ...allUsers[i]
                        })
                        break
                    }
                }
            } catch {
                setError('Could not set currentUser')
            }
        }
        set()
    }, [])

    return (
        <div className="main-page-container">
            <details id="account-settings">
                <summary className='setting'>Account Settings</summary>
                <div className="account">
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
                </div>
            </details>
            <ProfileView></ProfileView>
            <Link
                to="/add-post"
                className="btn btn-primary w-50 mt-3"
            >Create New Post</Link>
        </div>

    )
}
