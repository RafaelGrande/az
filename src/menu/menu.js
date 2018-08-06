import React, { Component } from 'react';
import './menu.css'

class Menu extends Component {
    render() {
      return (
        <section className="menu">
            <div className="menu__option">Viva Real</div>
            <div className="menu__option">Zap Imovéis</div>
        </section>
      );
    }
  }
  
  export default Menu;