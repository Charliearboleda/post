
import React, {useRef, useState} from 'react'
import {Card, Button, Form, Alert} from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup, currentUser} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit (e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Username and password combination do not match')
        }
        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    } // handleSubmit END =====

<<<<<<< HEAD
function handleSubmit(e) {
  e.preventDefault()
  if(passwordRef.current.value !== passwordConfirmRef.current.value){
    return setError('passwords do not match')
}
  try {
    setError('')
    setLoading(true)
    signup(emailRef.current.value, passwordRef.current.value)
  } catch {
    setError('Failed to create an account')
  }
  setLoading(false)

}

  return (
    <>
    <Card>
    <Card.Body>
    <h2 className="text-center mb-4">Sign Up</h2>
    {currentUser && currentUser.email}
    {error && <Alert variant="danger">{error}</Alert>}
    <Form onSubmit={handleSubmit}>
    <Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" ref={emailRef} required />
    </Form.Group>
    <Form.Group id="password">
    <Form.Label>PassWord</Form.Label>
    <Form.Control type="password" ref={passwordRef} required />
    </Form.Group>
    <Form.Group id="password confirm">
    <Form.Label>Password Confirmation</Form.Label>
    <Form.Control type="password" ref={passwordConfirmRef} required />
    </Form.Group>
    <Button className="w-100" type="submit">Submit</Button>
    </Form>
    </Card.Body>
    </Card>
    <div className= "w-100 text-center mt-s">
    Already have an account? Log In
    </div>
</>
  )
=======
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    {currentUser && currentUser.email}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password confirm"> // =================== One word? Two words?? =========================
                            <Form.Label>Retype Password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button className="w-100" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className= "w-100 text-center mt-s">
                Already have an account? Log In
            </div>
        </>
    )
>>>>>>> 87836d8158d0a63a148c8e48af1bbb99c9e534ef
}
