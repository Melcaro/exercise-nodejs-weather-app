import React from 'react';
import './App.css';

import { SearchBar } from './SearchBar';
import { Results } from './Results';

import { StyledApp, AppTitle } from './styles';
import {
  getWeatherByCity,
  getWeatherForFiveDaysByCity,
} from './../services/fetchData';

class App extends React.Component {
  state = {
    city: '',
    weatherResults: null,
    forecastResults: null,
  };

  onChange = ({ target: { value: city } }) => {
    this.setState({ city });
  };

  startSearch = async () => {
    const { data } = await getWeatherByCity(this.state.city);
    this.setState({ weatherResults: data });
  };

  startForecastSearch = async () => {
    const { data } = await getWeatherForFiveDaysByCity(this.state.city);
    this.setState({ forecastResults: data });
  };

  onKeyDown = e => {
    if (e.key === 'Enter') {
      this.startSearch();
    }
  };

  render() {
    const { city, weatherResults, forecastResults } = this.state;
    return (
      <StyledApp>
        <AppTitle>WEATHER APP</AppTitle>
        <SearchBar onChange={this.onChange} onKeyDown={this.onKeyDown} />
        {weatherResults && (
          <Results
            city={city}
            weatherResults={weatherResults}
            forecastResults={forecastResults}
            startForecastSearch={this.startForecastSearch}
          />
        )}
      </StyledApp>
    );
  }
}

export default App;
