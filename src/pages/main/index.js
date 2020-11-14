import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

// statefull component
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
    /* desestruturacao - declara um ou mais atributos e atribui
    a ele/s o valor do atributo de mesmo nome do objeto declarado
    a direita. */
    const { products } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href={product.url}>Acessar</a>
          </article>
        ))}
      </div>
    )
  }
}

export default Main;