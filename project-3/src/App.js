import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputForms from './Components/InputForms';
import Profile from './Components/Profile';

import { userSignup, loginUser, GetUserProfile} from './services/api_helper'; 
import {Route, Link, withRouter}  from 'react-router-dom';
import Homepage from './Components/Homepage';
import EditProfile from './Components/EditProfile';
import PostContainer from './Components/Posts/PostContainer';

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
    const userProfile = await this.handleProfile()

    if (loadedUser) {
      this.setState({
        loggedIn:true,
        userProfile: userProfile
      }) 
    }
    this.props.history.push('/profile')
  }

  handleLogin = async (e, user) => {
    e.preventDefault();
    const loadedUser = await loginUser(user);
    const userProfile = await this.handleProfile()

    if (loadedUser) {
      this.setState({
        loggedIn:true,
        userProfile: userProfile
      }) 
    }
    this.props.history.push('/profile');
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
      <img src ="https://image.freepik.com/free-vector/modern-city-night-landscape-neon-cartoon_1441-3157.jpg" 
      alt="pic"/> <p>Wayfarer: Ladies Night Out</p>

    <header>
          <nav>
          <Link to="/">Home</Link>
          <br></br>
          {this.state.loggedIn && <Link to="/profile">Profile Page</Link>}
          {this.state.loggedIn && <Link to="/home">Home</Link>}
          {this.state.loggedIn ? <button onClick={this.handleLogout}>Log Out</button>
          : <Link to="/login">SignUp/Login</Link>}
          </nav>
    </header>

      <div className="App" > 
      <Route path = "/login" render= {() => {
        // console.log("hello");
        return <InputForms handleInput={this.handleInput}
        handleLogin={this.handleLogin} />
        }} />
      
    <Route path = "/profile" render={() => {
      return <Profile user={this.state.userProfile} />
      }}/>
    
    <Route path = "/home" render={() => {
      return <PostContainer user={this.state.userProfile} />
      }} />
      

      <Route path = "/" render={()=> {
        return <Homepage />
        }} />

<Route path = "/user/profile" render={() => {
  return <EditProfile/>
}} />

    </div>
    );
  }
}



export default withRouter(App);

