import React from 'react';
import CityData from './components/CityData';
import SearchHistory from './components/SearchHistory';
import SearchBar from './components/SearchBar';

// API Key = 42db0dcc3ec86d73d68942eb995746b6
// http://api.openweathermap.org/data/2.5/weather?q=London&appid=42db0dcc3ec86d73d68942eb995746b6
// Change London => this.state.city

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-3 text-center'>Origin Weather Application</h1>
          <h4 className='text-center'>Always know if you'll need an umbrella!</h4>
        </div>
        <SearchBar />
        <br />
        <div className='row'>
          <div className='col-12 col-md-6 mb-4'>
            <CityData />
          </div>
          <div className='col-12 col-md-6 mb-4'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
