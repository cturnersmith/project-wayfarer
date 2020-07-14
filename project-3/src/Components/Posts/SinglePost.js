import React from 'react';
import {Link} from 'react-router-dom';

function SinglePost(props) {
    console.log(props.posts);
    let currentPost = null
    if(props.posts){
        currentPost = props.posts.filter(post => {
            return post.id === parseInt(props.postId)
        })
    }
    
    console.log(currentPost);
    return(
        <div className = "SinglePosts">
            
            {currentPost && currentPost[0] && (
                <div>
            <h2> {currentPost[0].title}</h2>
            <h3>{currentPost[0].body}</h3>
            <p>{currentPost[0].img}</p>
            
        </div>
        )}
        <Link to = '/posts' >See All Posts</Link>
                </div>
    )

}

export default SinglePost;