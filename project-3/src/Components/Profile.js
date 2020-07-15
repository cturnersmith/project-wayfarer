import React, { Component } from 'react';
import UserPosts from './UserPosts';
import {withRouter} from 'react-router-dom';


class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state= {
          name: this.props.user.name,
          img: this.props.user.img

        }
      }
      handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      }

     

    render () {
      const posts = this.props.user.Posts.map(posts=>{
        return <UserPosts posts={posts} destroyPost = {this.props.destroyPost}/>

      })


        return(
            <div className="flex-container">
                <h1>Profile Page</h1>
                <img src = {this.state.img} />
                <p>Name: {this.state.name}</p>
                <p>Current City: {this.props.user.City && this.props.user.City.name}</p>
                <p>Join Date: {this.props.user.createdAt}</p>
                <form onSubmit ={(e) => this.props.updateProfile(e, this.state)}>
                    <input type ="text" 
                    name = "name" 
                    value={this.state.name}
                    placeholder="name"  
                    onChange={this.handleChange}
                    />
                    <input type = "text" 
                    name= "img"
                    value= {this.state.img}
                    placeholder="image" 
                    onChange={this.handleChange}
                    />
                      <input type = "text" 
                    name= "city"
                    value= {this.props.user.City}
                    placeholder="Current City" 
                    onChange={this.handleChange}
                    />
                    <input id="submit" type ="submit" value="Edit" />
                    </form>
                
                <br></br>
               <p>{posts}</p> 
             
            </div>
        
        )
    }
      
    
}

export default withRouter (Profile);