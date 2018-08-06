import React, { Component } from 'react';
import Card from '../card/card';
import Modal from '../modal/modal';

import './list_products.css';

class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          itemModal: null
        };
    }

    openModal = (product) => {
      this.setState({...this.state, itemModal: product})
    }

    componentDidMount() {
        fetch('http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com/sources/source-1.json') 
        .then(result => {return result.json()})
        .then(
            (result) => {
                result.slice(0,20).map(r => console.log(r.images[0]));
              this.setState({
                isLoaded: true,
                items: result.slice(0,20),
                itemModal: result[4]
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    render() {
        console.log(this.state)
      return (
        <section className="list-product">
        {this.state.items.map((item) => 
          <Card 
            product= {item}
            click= {this.openModal}
          />
        )}
        {this.state.itemModal && 
          <Modal 
            product = {this.state.itemModal}
          />
        }
        </section>
      );
    }
  }
  
  export default ListProduct;