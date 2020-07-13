import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import {postPost, indexCities, destroyPost, putPost} from '../../services/api_helper';

import CreatePostForm from './CreatePostForm';
import UpdatePostForm from './UpdatePostForm';
import Cities from './Cities';
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

updatePost = async (event, id, values) => {
    event.preventDefault();
    const updatePost = await putPost (id, values);
    const allPosts = this.state.posts;
    const editedPosts = allPosts.map(post => {
        return post.id === parseInt(id) ? updatePost: post
    })
    this.setState({
        posts: editedPosts
    })
    this.props.history.push('/posts');
}

getCities = async () => {
    console.log(allCities);
    const allCities = await indexCities();
        this.setState({
            cities: allCities
        })
}

render() {
    return(
    <div>
        <CreatePostForm handleSubmit={this.createPost} /> 
        
        <Route path="/posts/:id/edit" render={(props) => {
        return<UpdatePostForm
        posts={this.state.posts}
        updatePost={this.updatePost}
        postId={props.match.params.id}
        />
    }} />
    <Cities handleSubmit={this.getCities}/>
    </div>

    ) 
}
}

export default withRouter (PostContainer);