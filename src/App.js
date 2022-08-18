import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { authorization } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HPz5HJXhhLAeb58McRm29vfmg4e9bmBA0kWo8ODAdfCpCXdzFfbECpP2tT2O3HKXmOOYBVlKObaMLy0NIz1uVn700L4zg6v6j');
//const promise = loadStripe("pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL");


function App() {

  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = authorization.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/orders'>
            <Header/>
            <Orders/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Header/>
            <Checkout/>
          </Route>
          <Route path='/payment'>
            <Header/>
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path='/'>
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
