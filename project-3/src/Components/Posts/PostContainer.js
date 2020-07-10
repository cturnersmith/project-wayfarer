import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import {postPost, indexPosts, destroyPost, putPost} from '../../services/api_helper';

import CreatePostForm from './CreatePostForm';
import { render } from 'react-dom';

class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

createPost = async (e, postData) => {
    e.preventdefault();
    const newPost = await postPost(postData);
    const posts = this.state.posts;
    posts.push(newPost.data);
    this.setState({
        posts: posts
    })
}



render() {
    return(
    <div>
        <CreatePostForm handleSubmit={this.createPost} /> 
        
    </div>

    ) 
}
}

export default withRouter (PostContainer);