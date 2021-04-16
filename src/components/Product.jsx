import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="item">
        <div className="image">
          <img src="images/products/watch.jpeg" alt="image" />
        </div>
        <div className="midlle aligned content">
          <div className="description">
            <a>Produiut technologique</a>
            <p>C'est une montre très cher !!!</p>
          </div>
          <div className="extra">
            <span> publier par :</span>
            <img src="images/avatars/panda.jpeg" alt="" className=" ui avatar image"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;