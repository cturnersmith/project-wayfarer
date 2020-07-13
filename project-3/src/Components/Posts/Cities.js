import React, {Component} from 'react';
import { render } from 'react-dom';

class Cities extends Component {
    constructor(props) {
        super(props);
    
        this.state= {
          showComponent: true
        }
    }

    render(){
    return (
        <div className = "cites">
            <h1>Cities</h1>
           <h1>City Name: {this.props.City}</h1>
           <p>{this.props.City.img}</p>
           <p>{this.props.City.state}</p>
           <p>{this.props.City.country}</p>

            })}
        </div>
    )
}
}

export default Cities;