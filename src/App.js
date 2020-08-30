import React from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact/Contact'
import Checkout from './pages/Checkout/Checkout'
import Products from './pages/Products'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './App.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HGqIEBMDhC88mikqdlQVcqDukgNHkTGx2aCgi4ehrebOZMVWF1sb0ogzF62CH5YLLjVBmyGa94G3IR9A25dPHPb00wN9ztCwz");

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Elements stripe={promise}>
              <Checkout />
            </Elements>
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
            <Products />
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
