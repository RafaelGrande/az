import React, { Component } from 'react';

import Header from './header/header'
import Menu from './menu/menu'
import ListProducts from './list_products/list_products'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <ListProducts />
      </div>
    );
  }
}

export default App;
