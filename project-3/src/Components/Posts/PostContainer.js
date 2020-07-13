import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import {postPost, indexCities, destroyPost, putPost, getCityPosts} from '../../services/api_helper';

import CreatePostForm from './CreatePostForm';
import UpdatePostForm from './UpdatePostForm';
import Cities from './Cities';
import PostList from './PostList';
import SinglePost from './SinglePost';




class PostContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            cityId: "1"
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

destroyPost = async (id) => {
    await destroyPost(id);
    const allPosts = this.state.posts;
    const remainingPosts = allPosts.filter(post => {
        return post.id !== id
    })
    this.setState({
        posts: remainingPosts
    })
    this.props.history.push('/posts');
}

handleCityClick = async(cityId) => {
    console.log(cityId);
    const posts = await getCityPosts(cityId)
    this.setState({
        cityId: cityId,
        posts:posts


    })
}



render() {
    return(
    <div>
        {/* <CreatePostForm handleSubmit={this.createPost} /> 
        
        <Route path="/posts/:id/edit" render={(props) => {
        return<UpdatePostForm
        posts={this.state.posts}
        updatePost={this.updatePost}
        postId={props.match.params.id}
        />
    }} /> */}
    <Cities handleCityClick={this.handleCityClick}/>
    <PostList posts={this.state.posts} />
    {/* <Route path = '/posts/:postid' render={() =>{
        return <SinglePost />
            }} /> */}
    {/* <SinglePost /> */}
    </div>

    ) 
}
}

export default withRouter (PostContainer);