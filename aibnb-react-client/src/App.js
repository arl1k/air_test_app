import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CityChoice from './components/CityChoice';
import PropertiesRow from './components/propertiesrow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      searchUrl: "https://www.airbnb.com/search/search_results?location=" + encodeURIComponent(/*cityName*/"Daugavpils, Latvia"),
      limit: 18,
      properties : []
    }
    this.loadProperties = this.loadProperties.bind(this);
  }

  loadProperties(str) {
    console.log(str) //option choice
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    fetch(proxyUrl + "https://www.airbnb.com/search/search_results?location=" + encodeURIComponent(/*cityName*/"Daugavpils, Latvia") + "&page=4-", {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36'
      }
    })
      .then(response => {
        return response.json();
      }).then(json => {
        json = json.results_json.search_results;
        this.state.properties = json;
        console.log(json);
      }).catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div id="maincontainer">
        <h1> Wellcome to Airbnb helper </h1>
        <div id="choicecontainer">
          <CityChoice search={this.loadProperties} />
        </div>
        <div id="propertiescontainer">
            <PropertiesRow items={this.state.properties}/>
        </div>
      </div>
    )
  }
}


export default App;


// var airbnbObj = {};
// airbnbObj.listing = {
//   bathrooms: number,
//   bedrooms: number,
//   beds: number,
//   star_rating: number,
//   id: 21221274(number),
//   name: "",
//   picture_url: "main picture",
//   picture_urls: ['all pictures'],
//   room_type: "",
//   user: {
//     first_name: "",
//     id: number
//   }
// }

// airbnbObj.pricing_quote = {
//   rate: {
//     amount: number,
//     currency: "ILS"
//   }
// }