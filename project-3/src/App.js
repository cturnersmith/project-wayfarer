import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import InputForms from './Components/InputForms';
import Profile from './Components/Profile';



import { userSignup, loginUser, GetUserProfile, updateProfile, destroyPost} from './services/api_helper'; 
import {Route, Link, withRouter}  from 'react-router-dom';
import Homepage from './Components/Homepage';
import EditProfile from './Components/EditProfile';
import PostContainer from './Components/Posts/PostContainer';
import SinglePost from './Components/Posts/SinglePost';

class App extends Component {
  constructor(props) {
    super(props);

    this.state= {
      userProfile : null,
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
    localStorage.removeItem('authToken');
    this.setState({
      loggedIn: false,
      userProfile : null
    })
    this.props.history.push('/');
  }

  updateProfile = async (e, profile) => {
    e.preventDefault();
    const userProfile = await updateProfile(profile)
    console.log(userProfile);
    this.setState({
      userProfile: userProfile
    })
  }

  destroyPost = async (id) => {
    console.log(id);
    await destroyPost(id);
    const loadedUser = await GetUserProfile();
    this.setState({
      userProfile: loadedUser})
    
}




  

  render() {
    console.log(this.state.loggedIn);
  return (
    <div className = "Title"> 
      <img src ="https://image.freepik.com/free-vector/modern-city-night-landscape-neon-cartoon_1441-3157.jpg" 
      alt="pic"/> <h4>Wayfarer: Ladies Night Out</h4>

    <header>
          <nav className = "nav">
          <Link className = "Link1" to="/">Home</Link>
          <br></br>
          {this.state.loggedIn && <Link className = "Link2" to="/profile">Profile Page</Link>}
          {this.state.loggedIn && <Link className = "Link3" to="/posts">Post</Link>}
          {this.state.loggedIn ? <button className ="logoutButton" onClick={this.handleLogout}>Log Out</button>
          : <Link className = "Link4" to="/login">SignUp/Login</Link>}
          </nav>
    </header>

      <div className="App" > 
      
      <Route path = "/login" render= {() => {
        // console.log("hello");
          return <InputForms handleInput={this.handleInput}
        handleLogin={this.handleLogin} />
        }} />
      
    <Route path = "/profile" render={() => {
      return <Profile user={this.state.userProfile} updateProfile = {this.updateProfile} destroyPost = {this.destroyPost} />
      }}/>
    
    <Route path = "/posts" render={() => {
      return <PostContainer user={this.state.userProfile} />
      }} />
      
      {/* <Route path = "/" render={()=> {
        return <Homepage />
        }} /> */}
    <Route exact path = '/'><Homepage/></Route>

 {/* <Route  path = '/posts/:postid' render={() =>{
        return <SinglePost />
            }} /> */}

    {/* <Route path = "/profile/:id/edit" render={() => {
        return <EditProfile user = {this.state.userProfile}/>
        }} /> */}

    </div>
    </div>
    )
  }
}



export default withRouter(App);

