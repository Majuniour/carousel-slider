import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from './pages/home-page/home-page.component';
import Header from './components/header/header.component';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <BrowserRouter>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
