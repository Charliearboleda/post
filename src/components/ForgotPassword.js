// DEPENDENCIES
import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// CONTEXT
import { useAuth } from '../contexts/AuthContext'

export default function ForgotPassword() {
    const [ error, setError ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const emailRef = useRef()
    const { resetPassword } = useAuth()

    async function handleSubmit (e) {
        e.preventDefault()
        try {
            setMessage("")
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password. Please try again')
        }
        setLoading(false)
    } // handleSubmit END =====

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>

                    { error && <Alert variant="danger">{ error }</Alert> }
                    { message && <Alert variant="success">{ message }</Alert> }
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={ emailRef }
                                required
                            />
                        </Form.Group>
                        <Button
                            className="w-100"
                            type="submit"
                        >Reset Password</Button>
                    </Form>
                    <div className= "w-100 text-center mt-3">
                        <Link to="/login"> Log In</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-s">
                Need to create an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )

}
