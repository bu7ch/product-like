import React, { Component } from 'react';
import Product from './Product';
import * as Data from '../data'

class ProductList extends Component {

  handleProductUpVote(productId) {
    console.log(productId + " was upvoted");
  }
  render() {
    
    const productComponents = Data.products.map(product => (
      <Product
        key={'product- ' + product.id}
        id={product.id}
        title={product.title}
        description={product.description}
        url={product.url}
        votes={product.votes}
        submittedAvatarUrl={product.submittedAvatarUrl}
        productImageUrl={product.productImageUrl}
        onVote={this.handleProductUpVote}
        />
    ))
    
    return (
      <div className="ui unstackable items">
        {productComponents}
      </div>
    );
  }
}

export default ProductList;