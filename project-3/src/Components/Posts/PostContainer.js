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
            cityId: null,
            cities: []
        }
    }
//     getCities = async () => {
//         const allCities = await indexCities();
//             this.setState({
//                 cities: allCities
//             })
//     }
// componentDidMount(){
//     this.getCities()
// }

createPost = async (e, postData) => {
    console.log(postData);
    e.preventDefault();
    const newPost = await postPost(this.state.cityId, postData);
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
        posts:posts.Posts

    })
}



render() {
    return(
    <div>
        {/* <CreatePostForm handleSubmit={this.createPost}
        cities = {this.state.cities} />  */}
        
        <Route path="/posts/:id/edit" render={(props) => {
        return<UpdatePostForm
        posts={this.state.posts}
        updatePost={this.updatePost}
        postId={props.match.params.id}
        />
    }} />
    <Cities handleCityClick={this.handleCityClick}/>
    <Route exact path = '/posts' render={() =>(
        <PostList posts={this.state.posts} cityId={this.state.cityId} createPost={this.createPost} /> 
    
    )}/>

    <Route path = '/posts/:id' render={(props) =>{
        return <SinglePost
        posts={this.state.posts} postId={props.match.params.id} />
            }} /> 
    </div>

    ) 
}
}

export default withRouter (PostContainer);