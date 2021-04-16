import React, { Component } from 'react';
import Product from './Product';
import * as Data from '../data'

class ProductList extends Component {
  state = {
    products: [],
  }

componentDidMount(){
  this.setState({products : Data.products})
}

  handleProductUpVote=(productId)=> {
    const nextProducts = this.state.products.map((product) => {
      if(product.id === productId){
        return Object.assign({}, product, {votes: product.votes + 1})
      }else{
        return product
      }
    })
    this.setState({ products: nextProducts })
  }
  render() {
const products = this.state.products.sort((a, b) => b.votes - a.votes)

    const productComponents = products.map(product => (
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