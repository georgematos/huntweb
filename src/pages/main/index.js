import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  componentDidMount() {
    
    this.loadProducts().then(console.log);
      
  }
  
  loadProducts = async () => {
    const response = await api.get('/products');
    return response.data.docs;
  }

  render() {
    return (
      <h1>Hello Rocketseat</h1>
    )
  }
}
