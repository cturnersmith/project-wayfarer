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
        <form onSubmit={(e) => this. props.handleSubmit(e,this.state)}>
            <input type = "text" name="title" placeholder = "title" onChange={this.handleChange}/>
            <input type = "text" name="body" placeholder="Enter Post Here" onChange={this.handleChange}/>
            <input type = "submit" value = "submitPost"/>
        </form>
        )
    }
}

export default CreatePostForm;
