import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Searchbar from './components/Searchbar.js';
import Results from './components/Results.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      weatherData: [],
    };
    // this.citiesArray = getCities();
  }

  async getCities() {
    const { data } = await axios.get('/services/json/list-cities');
    return Object.values(data);
  }
  citySearch({ target: { value } }) {
    this.setState({
      inputValue: value,
    });
  }
  async getWeather(city = 'Paris') {
    const { data } = await axios.get(
      `https://www.prevision-meteo.ch/services/json/${city}`
    );
    this.setState({
      weatherData: [
        data.fcst_day_0,
        data.fcst_day_1,
        data.fcst_day_2,
        data.fcst_day_3,
        data.fcst_day_4,
      ],
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar
          citySearch={this.citySearch.bind(this)}
          getWeather={this.getWeather.bind(this)}
          inputValue={this.state.inputValue}
          citiesArray={this.getCities}
        />
        <button onClick={() => console.log(this.citiesArray)} />
        <Results weatherData={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
