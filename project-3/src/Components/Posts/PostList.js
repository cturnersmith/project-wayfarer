import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import SinglePost from './SinglePost';
import CreatePostForm from './CreatePostForm';

class PostList extends Component {
    constructor(props) {
    super(props);

    }

    render() {
    return (
        <div>
            {this.props.cityId && <CreatePostForm handleSubmit={this.props.createPost} cityId={this.props.cityId} /> }
            {this.props.posts && this.props.posts.map(post => {
                return <Link to={`/posts/${post.id}`}><h3>{post.title}</h3> </Link>
            })}
           
       
        <Route path = '/posts/:postid' render={() =>{
            return <SinglePost />
                }} />
                 </div>
    )
}
}


export default PostList; 