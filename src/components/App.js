import React, { Component } from 'react'
import axios from 'axios'
import Signup from './Signup'
import {Container} from "react-bootstrap"
import {AuthProvider} from '../contexts/AuthContext'

class App extends Component {
  state = {
    author : '',
    image: '',
    text: '',
    liked_by : [0],
    comments: [0],
    posts: []
  }

  getPosts = () => {
    axios
      .get('https://post-ga-api.herokuapp.com/api/posts').then(
        (response) => this.setState({posts: response.data}),
        (err) => console.log(err)
      )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://post-ga-api.herokuapp.com/api/posts', this.state).then((response) => {
      this.getPosts()
    })
  }

  updatePost = (e) => {
    e.preventDefault()
    axios.put('https://post-ga-api.herokuapp.com/api/posts/' + e.target.name, this.state)
    .then(
      (response) => {
        this.getPosts()
        this.setState({
          author : '',
          image: '',
          text: '',
          liked_by : [0],
          comments: [0]
        })
      }
    )
  }

  deletePost = (e) => {
    axios.delete('https://post-ga-api.herokuapp.com/api/posts/' + e.target.value).then(
      (response) => {
        this.getPosts()
      }
    )
  }

  componentDidMount = () => {
    this.getPosts()
  }

  render = () => {
    return (
      <AuthProvider>
      <Container className="d-flex align-itmes-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
      <Signup />
      </div>
      </Container>
      </AuthProvider>
    )
  }
        // <h2>Add a New Post</h2>
        // <form onSubmit={this.handleSubmit}>
        //   <label htmlFor="author">Author</label>
        //   <input
        //     type="number"
        //     name="author"
        //     onChange={this.handleChange}
        //     value={this.state.author}
        //   />
        // <br />
        // <label htmlFor="image">Image</label>
        //   <input
        //     type="text"
        //     name="image"
        //     onChange={this.handleChange}
        //     value={this.state.image}
        //   />
        //   <br />
        //   <label htmlFor="text">Share Something:</label>
        //   <input
        //     type="text"
        //     name="text"
        //     onChange={this.handleChange}
        //     value={this.state.text}
        //   />
        //
        //   <input type="submit" value="Post-It" />
        // </form>
        // <div className="allPosts">
        //   {this.state.posts.map((posts) => {
        //     return(
        //       <div key={posts.id}>
        //         <h3>Author: {posts.author}</h3>
        //         <img src={posts.image} />
        //         <h3>Post: {posts.text}</h3>
        //         <details>
        //           <summary>Edit Post</summary>
        //             <form id={posts.id} onSubmit={this.updatePost}>
        //               <label htmlFor="author">Author</label>
        //               <br />
        //               <input type="number" id="author" onChange={this.handleChange} />
        //               <br />
        //               <label htmlFor="image">Image</label>
        //               <br />
        //               <input type="text" id="image" onChange={this.handleChange} />
        //               <br />
        //               <label htmlFor="text">Text</label>
        //               <br />
        //               <input type="text" id="text" onChange={this.handleChange} />
        //               <br />
        //               <input type="hidden" id="like_by" onChange={this.handleChange} />
        //               <input type="hidden" id="comments" onChange={this.handleChange} />
        //               <input type="submit" value="Update Post" />
        //             </form>
        //         </details>
        //         <button value={posts.id} onClick={this.deletePost}>DELETE</button>
        //       </div>
            // )
    //       })}
    //     </div>
  //     </div>
  //   )
  // }
}


export default App
