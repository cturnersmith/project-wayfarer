import React from 'react';


function Profile(props) {
console.log("hello");
return(
    <div className="flex-container">
        <h1>Profile Page</h1>
        <h3>Name: {props.user.name}</h3>
        <img src = {props.user.img} />
        <p>Current City: {props.user.City.name}</p>

    </div>

)
}

export default Profile;