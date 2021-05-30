import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import axios from "axios"


export default function Comment() {
    const [state, setState] = useState({
        author: '',
        text: '',
    })

    const handleChange = (event) => {
        setState(
            {
                ...state,
                [event.target.name]: event.target.value
            }
        )
    }

    const componentDidMount = () => {
        getComments()
    }


    const getComments = () =>{
        axios.get('https://post-ga-api.herokuapp.com/api/comments')
        .then((response)=>{
            setState({
                ...state, comments: response.data
            })
        })
    }

    const addComment = (e) => {
        axios
        .post('https://post-ga-api.herokuapp.com/api/comments', state).then((response)=>{
            getComments()
        })


    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://post-ga-api.herokuapp.com/api/comments',
                state
            ).then(
                (response) => {
                    getComments()
                }
            )
        // AXIOS END =====
    }

    return (
        <>
        <Form onSubmit={addComment}>
        <input
         type="number"
         name="author"
         value={state.author}
         onChange={handleChange}
        />
        <input
            type="textarea"
             value={state.text}
             name="text"
             onChange={handleChange}/>
             <input
             type="submit"
             onClick={handleSubmit}
             value="add comment" />

        </Form>
        </>
    )
}
