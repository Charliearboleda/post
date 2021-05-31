// DEPENDENCIES
import React, { useRef, useState } from 'react'
import { Card, Button, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

// CONTEXTS
import { useAuth } from '../contexts/AuthContext'

export default function Signup(props) {
    const [ state, setState ] = useState({})
    const [ error, setError ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const history = useHistory()

    const handleChange = (event) => {
        setState(
            {
                ...state,
                [ event.target.name ]: event.target.value
            }
        )
    }

    const postUser = () => {
        axios
            .post('http://localhost:8000/api/users', state)
            .then(
                (response) => {
                    setState(
                        {
                            author: '',
                            image: '',
                            text: ''
                        }
                    )
                }
            )
            .catch((err) => {
                console.log(err)
            })
        // AXIOS END =====
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            postUser()

        } catch {
            setError('Failed to create an account. Please try again')
        }
        setLoading(false)
    } // handleSubmit END =====

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form id="create-user-form" onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                ref={ emailRef }
                                onChange={ handleChange }
                                required
                            />
                        </Form.Group>
                        <Form.Group id="displayName">
                            <Form.Label>Display Name (not unique)</Form.Label>
                            <Form.Control
                                name="displayName"
                                onChange={ handleChange }
                                required
                            />
                        </Form.Group>
                        <Form.Group id="tagLine">
                            <Form.Label>Profile Tag Line</Form.Label>
                            <Form.Control
                                name="tagLine"
                                onChange={ handleChange }
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={ passwordRef }
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={ passwordConfirmRef }
                                required
                            />
                        </Form.Group>
                        <Button
                            className="w-100"
                            type="submit"
                        >Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-s">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )

}
