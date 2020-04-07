import React, { Fragment } from 'react';
import Navbar from './Navbar';
import './App.css';
import Search from './Search';
import BookBuffet from './BookBuffet';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
  <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps} />}/>
      <Route exact path="/search" render={routeProps => <Search {...routeProps}/>}/>
      <Route exact path="/bookbuffet" render={routeProps => <BookBuffet {...routeProps}/>}/>  
    </Switch>
  </div>
  );
}

export default App;
