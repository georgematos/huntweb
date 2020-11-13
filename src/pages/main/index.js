import React, { Component } from 'react';
import api from '../../services/api';

class Main extends Component {

  state = {
    products: []
  }

  async componentDidMount() {
    const products = await this.loadProducts();

    this.setState({
      products
    })
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    return response.data.docs;
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    )
  }
}

export default Main;