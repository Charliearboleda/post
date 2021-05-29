import EditPost from './EditPost'

export default function Post(props) {
    return (
        <div key={ props.post.id }>
            <h3>Author: { props.post.author }</h3>
            <img src={ props.post.image } alt={ props.post.text } />
            <h3>Post: { props.post.text }</h3>
            <details>
                <summary>Edit Post</summary>
                <EditPost
                    post={ props.post }
                    getPosts={ props.getPosts }
                ></EditPost>
            </details>
            <button
                value={ props.post.id }
                onClick={ props.deletePost }
            >DELETE</button>
        </div>
    )
}
