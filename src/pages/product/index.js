import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Product extends Component {
  render() {
    const { title, description, url } = this.props.location.productProps;
    return (
      <div className="container">
        <div className="product-info">
          <h1>{title}</h1>
          <p>{description}</p>
          <hr />
          <p>
            URL: <a href={url}>{url}</a>
          </p>
        </div>
        <Link to="/">
          <button >Voltar</button>
        </Link>
      </div>
    )
  }
};