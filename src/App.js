import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ReactRouterDOM} from 'react-router-dom'
import {Home} from './pages/home'
import {Search} from './pages/search'


class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </div>
    );
  }
}

export default App;
