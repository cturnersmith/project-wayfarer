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
        <div className = "cites">
            <h1>Cities</h1>
    
            {this.state.cities && this.state.cities.map(city => {
            return  <h2 onClick = {()=> this.props.handleCityClick(city.id)}>City Name: {city.name}</h2>
                // value = {this.state.cities} onChange={this.handleCityClick}>
            })}
    
       
           {/* <h2>City Name: {this.props.data.dataCity}</h2>
           <p>City Image: {this.props.City.img}</p>
           <p>State: {this.props.City.state}</p>
           <p>Country: {this.props.City.country}</p> */}
        </div>
    )
}
}

export default Cities;