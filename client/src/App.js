import React from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Checkout from './pages/Checkout'
import Product from './pages/Product'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/product">
            <Header />
            <Product />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        {/* lalalalalala */}
      </div>
    </Router>
  );
}

export default App;
