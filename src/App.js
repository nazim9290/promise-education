import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import GetStart from './Components/Getstart/GetStart';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/ServiceItem/Service';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
     <Switch>
    
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/contact">
            <GetStart/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
