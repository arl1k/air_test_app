import React from 'react';

const cityOptions = [
    {value : "Select an Option", id : 0},
    {value : "Paris, France", id : 1},
    {value : "London, UK", id : 2},
    {value : "New York, USA", id : 3},
    {value : "Tel Aviv, Israel", id : 4}
]

class CityChoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            selectValue: ''
        }


        this.SearchProperties = this.SearchProperties.bind(this);
        this.SetChosenCity = this.SetChosenCity.bind(this)
    }

    SetChosenCity(e) {
        this.setState({ selectValue: e.target.value });
    }

    SearchProperties(event) {
        if (this.state.selectValue) {
            this.props.search(this.state.selectValue);
        }
        else {
            alert("Please choose the city")
        }
    }

    render() {
        return (
            <div>
                <label>please select the city</label>
                <select className="cityselect" onChange={this.SetChosenCity} onClick={this.RemoveDefaultOption}>

                    {cityOptions.map(option => {
                        return <CityOption name={option.value} key={option.id} id={option.id}/>
                    })}

                }
                </select>
                <button id="search" onClick={this.SearchProperties}>Search</button>
                <hr /></div>
        )
    }
}

class CityOption extends React.Component {

    render() {
        return (
            <option className="cityoption" value={this.props.id}>{this.props.name}</option>
        )
    }
}

export default CityChoice;