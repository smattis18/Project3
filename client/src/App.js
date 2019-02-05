import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Main from './components/Main';
import Scrubber from './components/Scrubber';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Main />
        <Scrubber />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
