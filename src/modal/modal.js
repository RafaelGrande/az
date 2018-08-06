import React, { Component } from 'react';
import './modal.css'

class Modal extends Component {
  render() {
      console.log(this.props)
    return (
      <div className="modal">
        <div className="modal__background">
            <div className="modal__content">
                <img src={this.props.product.images[0]}  alt=""/>
            </div>
        </div>
      </div>
    );
  }
}

export default Modal;
