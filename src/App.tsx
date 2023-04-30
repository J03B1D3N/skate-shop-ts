import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

import './App.scss';

function App() {
  return <>
  <ShoppingCartProvider>
  <Header/>
  <Main/>
  <Footer/>
  </ShoppingCartProvider>
  </>
}

export default App;
