import React, { useEffect } from 'react';
import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import CheckoutForm from './pages/Checkout/Checkout'
import Products from './pages/Products/Products'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import './App.css';
import { useStateValue } from './components/StateProvider';
import { auth } from './firebase';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HGqIEBMDhC88mikqdlQVcqDukgNHkTGx2aCgi4ehrebOZMVWF1sb0ogzF62CH5YLLjVBmyGa94G3IR9A25dPHPb00wN9ztCwz");

function App() {
  const [{ user }, dispatch] = useStateValue();

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
            <Elements stripe={promise}>
              <CheckoutForm />
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
