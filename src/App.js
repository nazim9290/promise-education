import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
     <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/service">
            <Service/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
