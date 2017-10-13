import React, { Component } from 'react';
import logo from './airbnblogo.svg';
import './App.css';
import CityChoice from './components/CityChoice';
import PropertiesList from './components/propertiesrow';
import logic from './logic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      properties: []
    }
    this.loadProperties = this.loadProperties.bind(this);
  }

  loadProperties(cityName) {
    console.log()
    return logic.LoadFirstPagePropertiesByCity(cityName) //load first page
      .then(json => {
        console.log(json.length)
        this.setState({ properties: this.state.properties.concat(json) })
      //   return logic.LoadAllPropertiesByCity(cityName) //load all the rest
      // })
      // .then(json => {

      //   let allProps = this.state.properties.concat(json);
      //   // Airbnb return properties with same Id, remove from list 
      //   allProps = allProps.filter((prop, index, propertiesArr) => {
      //     return propertiesArr.map(mapObj => mapObj.listing.id).indexOf(prop.listing.id) === index;
      //   });

      //   this.setState({ properties: allProps })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (
      <div id="maincontainer" >
        <div className="logo">
          <img src={logo} className="logoImg"></img>
        </div>
        <h1> Wellcome to Airbnb helper </h1>
        <hr />
        <CityChoice search={this.loadProperties} />
        <hr />
        <PropertiesList items={this.state.properties}/>
      </div>
    )
  }
}


export default App;