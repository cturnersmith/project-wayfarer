import React, {Component} from 'react';
import { render } from 'react-dom';
import {indexCities} from '../../services/api_helper'; 
import {Route, Link, withRouter}  from 'react-router-dom';



class Cities extends Component {
    constructor(props) {
        super(props);
    
        this.state= {
          cities: []
        }
    }
    getCities = async () => {
        const allCities = await indexCities();
            this.setState({
                cities: allCities
            })
    }
componentDidMount(){
    this.getCities()
}
    render(){
      
    return (
        <div className = "cities">
            <h1>Cities</h1>
            {this.state.cities && this.state.cities.map(city => {
            return  <h2 onClick = {()=> 
                    this.props.handleCityClick(city.id)}>{city.name} <img src={city.img} /></h2>
            })}
        </div>
    )
}
}

export default Cities;