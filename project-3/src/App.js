import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputForms from './Components/InputForms';
import Profile from './Components/Profile';

import { userSignup, loginUser, GetUserProfile} from './services/api_helper'; 
import {Route, Link}  from 'react-router-dom';
import HomePage from './Components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      currentUser : null,
      loggedIn: false

    }


  }
  handleInput = async (e, user) => {
    e.preventDefault();
    const loadedUser = await userSignup(user);
    this.setState({
      currentUser: loadedUser,
      // user: user.data.results
    })
    // this.props.history.push('./user/profile')
  }

  handleLogin = async (e, user) => {
    e.preventDefault();
   const loadedUser = await loginUser(user);
   const userProfile = await this.handleProfile()
   console.log(userProfile);
if (loadedUser) {
  this.setState({
   loggedIn:true,
   userProfile: userProfile

  })
}
  
  }


  handleProfile = async (e, user) => {
    const loadedUser = await GetUserProfile();
    return loadedUser
   
  }

  handleLogout = (e) => {
    e.preventDefault();
    this.setState({
      loggedIn: false
    })
  }



  

  render() {
    console.log(this.state.loggedIn);
  return (
    <div className = "Title"> 
    <img src ="https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D128755171176807&imgrefurl=https%3A%2F%2Fwww.facebook.com%2FBestDestinationsToTravel%2F&tbnid=cLKoYwlDl9pHSM&vet=12ahUKEwjBkOWanb_qAhXFZt8KHUDFAusQMygIegUIARDeAQ..i&docid=8iFr-JLryGvCWM&w=960&h=417&q=travel%20pictures&ved=2ahUKEwjBkOWanb_qAhXFZt8KHUDFAusQMygIegUIARDeAQ" 
    alt="pic"/> <p>Wayfarer</p>

<header>
        <nav>
        <Link to="/">Home</Link>
    
        {this.state.loggedIn && <Link to="/profile">Profile Page</Link>
  }
        {this.state.loggedIn ? <Link to="/logout">Logout</Link>
        : <Link to="./login">Login</Link>
    }
          </nav>
</header>

    <div className="App" > 
    <InputForms handleInput={this.handleInput}
                handleLogin={this.handleLogin} />
   <Route path = "/profile" render={() => {
     return this.state.userProfile && <Profile user={this.state.userProfile} />
   }
  } />
   
  
    <Route path = "/logout" render={()=>{
        return this.state.loggedIn && <button onClick={this.handleLogout}>Log Out</button>
      }
      } />
    <Route path = "/" render={()=> {
      return <HomePage />
    }}  />
    </div>
    </div>
  );
}
}


export default App;

