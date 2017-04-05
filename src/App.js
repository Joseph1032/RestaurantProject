import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
      <h1>REST Name </h1>
        <div className='Main'>

          <div className='innerDiv'>Reservation - Map</div>
          <div className='innerDiv'>Menu</div>
          <div className='innerDiv'>About Us - Blog</div>
          <div className='innerDiv'>Reservation Special Map</div>
          <div className='innerDivShow'>Daily Special</div>

        </div>

      </div>
    );
  }
}

export default App;
