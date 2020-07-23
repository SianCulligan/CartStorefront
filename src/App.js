import React from 'react';
import { Provider } from 'react-redux';
import { Container } from '@material-ui/core';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store/store.js'


import Products from './Components/Products';
import Categories from './Components/Categories';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SimpleCart from './components/SimpleCart;'
import ProductDetails from './components/ProductDetails'


function App() {
  return (
  <BrowserRouter>
    <Provider store={store}> 

      <Container maxWidth="xl">    
        <Header /> 
      </Container>

      <Container maxWidth="l">
        <Route exact path="/">
          <SimpleCart />
          <Categories />
          <Products />
        </Route>
        <Route exact path="details/:id" component={ProductDetails} />
      </Container>

      <Container maxWidth="l">
      <Footer /> 
      </Container>

    </Provider>
  </BrowserRouter>
);
}

export default App;