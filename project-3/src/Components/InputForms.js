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
            <h2 className="logintitle"> Login </h2>
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
            <input id="login" type = "submit" value="Login" />
        </form>

        <form onSubmit ={(e) => this.props.handleInput(e, this.state)}>
                <h3 className="signup" >SignUp</h3>
                    <input type ="text" 
                    name = "Username" 
                    placeholder="Username"  
                    onChange={this.handleChange}
                    />
                    <input type = "Password" 
                    name= "Password" 
                    placeholder="Password" 
                    onChange={this.handleChange}
                    />
                    <input type = "password"
                    name="password"
                    placeholder="Confirm Password"
                    />
                    <input id="submit" type ="submit" value="Submit" />
                    </form>
            </div>
        )
    }
}

export default InputForms;