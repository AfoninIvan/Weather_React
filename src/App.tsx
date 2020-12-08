import React from 'react';
import { store } from './Redux/store'
import './App.css';
import { Provider } from 'react-redux'
import { Header } from './Components/Header/Header';
import { Routes } from './Routes/Routes';
import { Footer } from './Components/Footer/Footer';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const history = createBrowserHistory()
  return (
    <>
      <CssBaseline/>
      <Router history={history}>
        <Provider store={store}>
          {/* <Notifier/> */}
          <Header />
          <Routes />
          <Footer />
        </Provider>
      </Router>
    </>
  );
}

export default App;
