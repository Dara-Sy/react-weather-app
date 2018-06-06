import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Details from './Details';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: '',
      city: '',
      temp: 0,
      templow: 0,
      temphigh: 0,
      humidity: 0,
      windspeed: 0,
      country: '',
      description: ''
    }
    this.getData = this.getData.bind(this)
  }

  newItemChange(e) {
    this.setState({
      zipcode: e.target.value
    })
  }

  getData(e) {
    e.preventDefault()
    let zipcode = this.state.zipcode
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=052f26926ae9784c2d677ca7bc5dec98`)
    .then(res => res.json() )
    .then(data => {
      this.setState({
        city: data.name,
        temp: (data.main.temp * (9/5) - 459.67),
        templow: (data.main.temp_min * (9/5) - 459.67),
        temphigh: (data.main.temp_max * (9/5) - 459.67),
        humidity: data.main.humidity,
        windspeed: data.wind.speed,
        country: data.sys.country,
        description: data.weather[0].description
      })
    })
      .catch( err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <h1> Weather App </h1>
        <input
        onChange={(e) => this.newItemChange(e)}
        type="text"
        name="zipcode"
        placeholder="zipcode..."
        value={this.state.zipcode} />
        <button onClick={this.getData}>Get Data</button>
        <button> Submit </button>
        <p> In {this.state.city} the current temperature is... </p>
        <h1> {this.state.temp} {this.state.templow}  Min</h1>
        <h1> {this.state.temphigh} Max </h1>
        <Details
          humidity={this.state.humidity}
          windspeed={this.state.windspeed}
          country={this.state.country}
          description={this.state.description}
        />
       </div>
    );
  }
}

export default App;

// <Details />
