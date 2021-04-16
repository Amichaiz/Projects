import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import 'tachyons';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/calc/Calculater'
import Genquates from './components/quates/Genquates'
import Maps from './components/maps/Maps'
import Genmeme from './components/genmeme/Genmeme.js'
import Books from './components/books/Books.js'
import Tic from './components/tic/Tic.js'
import Weather from './components/weather/Weather.js'
import Memory from './components/memory/Memory.js'
import About from './components/about/About.js'

const App = () => {
  return (
    <React.Fragment>
        <NavBar />
        <Switch>
          <Route path='/' exact render={() => <About />} />
          <Route path='/calculater' children={<Calculator />} />
          <Route path='/genquates' children={<Genquates />} />
          <Route path='/maps' children={<Maps />} />
          <Route path='/genmeme' children={<Genmeme />} />
          <Route path='/bookssearch' children={<Books />} />
          <Route path='/tic_tac_toe' children={<Tic />} />
          <Route path='/weather' children={<Weather />} />
          <Route path='/memory' children={<Memory />} />
        </Switch>
      </React.Fragment>
  );
}

export default App;