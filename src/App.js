import React from 'react';
import './App.css';
import {ReactRouterDOM} from 'react-router-dom'
import {Home} from './pages/home'
import {Search} from './pages/search'

// input: 4c's of diamond and a pricelist. output : list price of the diamond
export function listPrice(shape, color, clarity, weight, priceList) {
  if (shape != "BR" && shape != "round") { shape = "pear" } else { shape = "round" };
  for (var i = 0; i < priceList.length; i++) { //searches the right price on the pricelist
    if (shape === priceList[i].shape && color === priceList[i].color &&
      clarity === priceList[i].clarity && weight >= priceList[i].low_size &&
      weight <= priceList[i].high_size)
      return priceList[i].caratprice;
  }
  return 0;
}
//user name loged in. NEED TO ATTACH TO THE LOGIN AND BUILD LIST OF USER DATA
export var user = "moshe";


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
