import React, {Component} from 'react';

class CreatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: ""
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
    })
}
    render() {
        return (
            <div className = "Post-Container">
            <h2 className= "posts" >Create Post</h2>
        <form onSubmit={(e) => this.props.handleSubmit(e,this.state)}>
            <input type = "text" name="title" placeholder = "title" onChange={this.handleChange}/>
            <input type = "text" name="body" placeholder="Enter Post Here" maxLength = "200" onChange={this.handleChange}/>
            <input id = "submit" type = "submit" value = "SubmitPost"/>
        </form>
        </div>
        )
    }
}

export default CreatePostForm;
