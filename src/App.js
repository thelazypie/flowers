import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header' 
import MainContent from './Components/Content/MainContent/MainContent'
import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default App;
