import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import SinglePost from './SinglePost';

class PostList extends Component {
    constructor(props) {
    super(props);

    }

    render() {
    return (
        <div>
            {this.props.posts.Posts && this.props.posts.Posts.map(post => {
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