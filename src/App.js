import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Content from './components/Content/Content'

class App extends Component {
  render() {
    return (
      <div id="drum-machine" className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
