import React, {Component} from 'react';

class InputForms extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
        <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
            <h2> Login </h2>
            <input type = "text" 
            name="username"
            placeholder="UserName"
            onChange={this.handleChange}
            />
            <input 
            type = "password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            />
            <input type = "submit" value="LogIn" />
        </form>

        <form onSubmit ={(e) => this.props.handleInput(e, this.state)}>
                <h3>SignUp</h3>
                    <input type ="text" 
                    name = "username" 
                    placeholder="username"  
                    onChange={this.handleChange}
                    />
                    <input type = "password" 
                    name= "password" 
                    placeholder="password" 
                    onChange={this.handleChange}
                    />
                    <input type = "password"
                    name="password"
                    placeholder="Confirm Password"
                    />
                    <input type ="submit" value="Submit" />
                    </form>
            </div>
        )
    }
}

export default InputForms;