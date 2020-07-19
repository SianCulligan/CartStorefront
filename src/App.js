import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './styles.scss';

import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';

import { Container, CssBaseline } from '@material-ui/core';

function App() {
    return (
      <>
    <Provider store={store}>
             <CssBaseline />
             <div className='App'>
                <Header />
              <Container maxWidth='sm'>
                   <Categories />
                    <Products />
                </Container>
                <Footer /> 
             </div>
         </Provider>
        </>
    );
}

export default App;