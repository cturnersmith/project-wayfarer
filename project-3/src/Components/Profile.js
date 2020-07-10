import React, { Component } from 'react';
import EditProfile from './EditProfile';


class Profile extends Component {
    constructor(props) {
        super(props);
    
        this.state= {
          showComponent: false
    
        }
      }
      onClick = () =>{
          console.log("clicked");
          this.setState({
              showComponent: true
          })
      }

    render () {
        return(
            <div className="flex-container">
                <h1>Profile Page</h1>
                <h3>Name: {this.props.user.name}</h3>
                <img src = {this.props.user.img} />
                <p>Current City: {this.props.user.City && this.props.user.City.name}</p>
                <p>Join Date: {this.props.user.createdAt}</p>
                <br></br>
              <button onClick = {this.onClick}> Edit Profile</button>
                {this.state.showComponent ? 
                <EditProfile user={this.props.user} /> :
                null }
            </div>
        
        )
    }
      
    
}

export default Profile;