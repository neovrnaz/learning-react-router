import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About title="About" />
      </Route>
    </div>
  </BrowserRouter>
);

export default App;
