// import React, { Component } from 'react'
import EditPost from './EditPost'


export default function Post(props) {
    return (
        <div key={props.post.id}>
            <h3>Author: {props.post.author}</h3>
            <img src={props.post.image} alt={props.post.text} />
            <h3>Post: {props.post.text}</h3>
            <details>
                <summary>Edit Post</summary>
                <EditPost
                    post={props.post}
                    getPosts={props.getPosts}
                ></EditPost>
            </details>
            <button value={props.post.id} onClick={props.deletePost}>DELETE</button>
        </div>
    )
}



// export default class Post extends Component {
//     render() {
//         return (
//             <div key={this.props.post.id}>
//                 <h3>Author: {this.props.post.author}</h3>
//                 <img src={this.props.post.image} alt={this.props.post.text} />
//                 <h3>Post: {this.props.post.text}</h3>
//                 <details>
//                     <summary>Edit Post</summary>
//                     <EditPost
//                         post={this.props.post}
//                         getPosts={this.props.getPosts}
//                     ></EditPost>
//                 </details>
//                 <button value={this.props.post.id} onClick={this.props.deletePost}>DELETE</button>
//             </div>
//         )
//     }
// }
