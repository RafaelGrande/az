import React, { Component } from 'react';
import './card.css';


class Card extends Component {
    render() {
        console.log(this.props)
      return (
        <div className="card" onClick={() => this.props.click(this.props.product)}>
            <img className="card__image" src={this.props.product.images[0]} alt=""/>
            <div className="card__title">
                <span>
                    {this.props.product.address.neighborhood}, {this.props.product.address.city}
                </span>
            </div>
            <div className="card__info">
                <ul>
                    <li>{this.props.product.bedrooms} {this.props.product.bedrooms > 1? "Quartos" : "Quarto"}</li>
                    <li>{this.props.product.bathrooms} {this.props.product.bathrooms > 1? "Banheiros" : "Banheiro"}</li>
                </ul>
            </div>
        </div>
      );
    }
  }
  
  export default Card;