import React from 'react';

function SinglePost(props) {
    // const currentPost = props.posts.filter(post => {
    //     return post.id === parseInt(props.postId)
    // })
    // console.log(currentPost);
    return(
        <div>
            <h1>Single post</h1>
            {/* {currentPost[0] && (
                <div>
            <h2> {currentPost[0].title}</h2>
            <h4>{currentPost[0].body}</h4>
            <p>{currentPost[0].img}</p>
            <button onClick={() => props.destroyPost(currentPost[0].id)}>Delete</button>
        </div>
        )} */}
                </div>
    )

}

export default SinglePost;