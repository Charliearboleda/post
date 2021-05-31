// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function UserPostPage () {
    // const [ state, setState ] = useState({ key: 'value' })
    return (
        <>
            <h2>This is the users post page</h2>
            <Link
                to="/"
                className="btn btn-primary w-50 mt-3"
            >Back</Link>
        </>
    )
}
