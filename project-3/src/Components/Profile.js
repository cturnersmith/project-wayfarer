import React, { Component } from 'react';
import EditProfile from './EditProfile';


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
                    <input type ="submit" value="Submit" />
                    </form>
                
                <br></br>
              {/* <button onClick = {this.onClick}> Edit Profile</button>
                {this.state.showComponent ? 
                <EditProfile user={this.props.user} /> :
                null } */}
            </div>
        
        )
    }
      
    
}

export default Profile;