import React from 'react';

function UserPosts (props){
    return(
        <div>
            <h1>{props.posts.title}</h1>
            <button onClick={() => props.destroyPost(props.posts.id)}>Delete</button>
        </div>

        )

}



export default UserPosts;