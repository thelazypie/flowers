import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import RegisterContent from "./Components/Content/RegisterContent/RegisterContent"
import AboutContent from "./Components/Content/AboutContent/AboutContent"
import AccessoriesContent from './Components/Content/accessoriesContent/accessoriesContent' 
import MainContent from './Components/Content/MainContent/MainContent'
// import Footer from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          {/* <Header/> */}
          {/* <MainContent/> */}
          <Route path="/" component={MainContent} exact/>
          <Route path="/accessories" component={AccessoriesContent} exact/>
          <Route path="/register" component={RegisterContent} exact/>
          <Route path="/about" component={AboutContent} exact/>
          {/* <Route component={MainContent}/> */}
          {/* <Footer/> */}
        </div>
      </BrowserRouter> 
    );
  }
}

export default App;
