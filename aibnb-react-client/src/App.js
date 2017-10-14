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
    this.LoadProperties = this.LoadProperties.bind(this);
    this.SetProperties = this.SetProperties.bind(this);
  }

  SetProperties(json) {
    if (json.length > 0) {
      let allProps = this.state.properties.concat(json);
      // Airbnb return properties with same Id, remove from list 
      allProps = allProps.filter((prop, index, propertiesArr) => {
        return propertiesArr.map(mapObj => mapObj.listing.id).indexOf(prop.listing.id) === index;
      });
      this.setState({ properties: allProps })
    }
  }

  LoadProperties(cityName, offset = 0) {

    if(offset == 0) { //first call clear properties
      this.setState({ properties: [] })
    }

    return logic.LoadProperties(cityName, offset)
      .then(json => {
        if (json) {
          this.SetProperties(json);
          //airbnb responses "Bad Request" if offet >= 1000.
          if (json.length < 50) {
            return true;
          }
          else {
            return this.LoadProperties(cityName, offset + 50)
          }
        }
      })
      .catch(function (err) {
        console.log(err);
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
        <CityChoice search={this.LoadProperties} />
        <hr />
        <PropertiesList items={this.state.properties} />
      </div>
    )
  }
}


export default App;