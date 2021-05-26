import React, { Component } from 'react'
import axios from 'axios'
import Signup from './Signup'
import {Container} from "react-bootstrap"
import {AuthProvider} from '../contexts/AuthContext'
import AddPost from './AddPost'
import Posts from './Posts'

class App extends Component {
  state = {
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
      // <AuthProvider>
      // <Container className="d-flex align-itmes-center justify-content-center" style={{minHeight: "100vh"}}>
      // <div className="w-100" style={{maxWidth: "400px"}}>
      // <Signup />
      // </div>
      // </Container>
      // </AuthProvider>
      <div>
        <AddPost
          AddPost={this.AddPost}
        />

        <div className="allPosts">
          {this.state.posts.map((posts) => {
              return (
                <Posts
                  posts={posts}
                  updatePost={this.updatePost}
                  deletePost={this.deletePost}
                  handleChange={this.handleChange}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}



export default App
