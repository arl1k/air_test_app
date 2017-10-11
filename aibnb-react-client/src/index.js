import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
import App from './App';
import PropTypes from 'prop-types';


class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count : this.props.count}

        this.AddNumber = this.AddNumber.bind(this); //pass this to function
    }

    AddNumber(event) {
        console.log(this.state.count)
        ReactDOM.getElementById('sum')
    }

    render() {
        return (
            <button className="countButton" onClick={this.AddNumber}>{this.props.count}</button>
        )
    }
}

MyButton.propTypes = {
    "count" : PropTypes.string.isRequired
};

ReactDOM.render(
<div>
    <div className="forsum">
        Count : <span id='sum'>0</span><br/>
    </div>
    <MyButton count='1'/>
    <MyButton count='5'/>
    <MyButton count='10'/>
</div>,
document.getElementById('app'))

