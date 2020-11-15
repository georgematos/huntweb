import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

// statefull component
class Main extends Component {

  state = {
    products: [],
    productsMetaData: {},
    page: 1
  }

  async componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const products = await api.get(`/products?page=${page}`);
    const { docs, ...productsMetaData } = products.data;

    this.setState({
      products: docs,
      productsMetaData,
      page
    })
  }

  prevPage = () => {
    const { page } = this.state;
    if (page > 1) {
      this.loadProducts(page - 1)
    }
  }

  nextPage = () => {
    const { page, productsMetaData } = this.state;
    if (page < productsMetaData.pages) {
      this.loadProducts(page + 1)
    }
  }

  render() {
    /* desestruturacao - declara um ou mais atributos e atribui
    a ele/s o valor do atributo de mesmo nome do objeto declarado
    a direita. */
    const { products, productsMetaData, page } = this.state;

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href={product.url}>Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productsMetaData.pages} onClick={this.nextPage}>Próxima</button>
        </div>
      </div>
    )
  }
}

export default Main;