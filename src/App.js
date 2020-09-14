import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import CheckoutForm from './pages/Checkout/Checkout'
import Products from './pages/Products/Products'
import Payment from './components/Payment/Payment'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './App.css';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';
import Orders from './components/Orders/Orders';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HGqIEBMDhC88mikqdlQVcqDukgNHkTGx2aCgi4ehrebOZMVWF1sb0ogzF62CH5YLLjVBmyGa94G3IR9A25dPHPb00wN9ztCwz");

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [query, setQuery] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

    return () => {
      unsubscribe();
    }

  }, [])

  console.log('USER IS >>>>>>>', user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckoutForm />
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
            <Products getQuery={(e) => setQuery(e)} />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
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
