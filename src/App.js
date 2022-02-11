import logo from './logo.svg';
import './App.css';
import 'material-design-lite/dist/material.min.css';
import 'material-design-lite/dist/material.red-orange.min.css';
import 'material-design-lite/material';

import { useEffect } from 'react';
import { actions } from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Landing } from './components/LandingPage';
import { FilmDetails } from './components/FilmDetails';
import { PickSeats } from './components/PickSeats';
import { Checkout } from './components/Checkout';
import { NotFound } from './components/NotFound';
import { Login } from './components/authentication/Login';
import { Logout } from './components/authentication/Logout';
import { Account } from './components/authentication/Account';

import Date from './Date';
import Currency from './Currency';

import {Routes, Route, Link} from 'react-router-dom';

function App() {
  console.log(1234.567.toCurrency())
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchInitialData());
  }, []);
  console.log(state);
  const styles = {
    navlink: {
      textDecoration: "none",
      textTransform: "capitalize",
      padding: "10px"
    }
  }
  return (
    <div className="App">
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <a href="/" style={styles.navlink} className="mdl-layout-title">Dinner and a Movie</a>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              {state.user ?
                <>
                  <a href="/account" className="mdl-layout__tab">My account</a>
                  <a href="/logout" className="mdl-layout__tab">logout</a>
                  <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
                </>
                :
                <>
                  <a href="/login" className="mdl-layout__tab">Login</a>
                  <a href="/register" className="mdl-layout__tab">Register</a>
                </>
              }

            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <a href="/" style={styles.navlink} className="mdl-layout-title">Dinner and a Movie</a>
          <nav className="mdl-navigation">
            {state.user ?
              <>
                <a href="/account" className="mdl-layout__link">My account</a>
                <a href="/logout" className="mdl-layout__link">logout</a>
                <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
              </>
              :
              <>
                <a href="/login" className="mdl-layout__link">Login</a>
                <a href="/register" className="mdl-layout__link">Register</a>
              </>
            }
          </nav>
        </div>
        <main className="mdl-layout__content">
          <Landing />
          <FilmDetails />
          <PickSeats />
          <Checkout />
          <NotFound />
          <Login />
          <Logout />
          <Account />
        </main>
        <footer>
        </footer>
      </div>
    </div>
  );
}

export default App;
