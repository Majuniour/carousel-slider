import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/home-page/home-page.component';


import './App.css';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
