import React from 'react'
import Header from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Product from './Product';
import CartPage from './CartPage';
import CheckOut from './CheckOut';
import Success from './Success';

function Home(){
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element = {<Dashboard />} />
      <Route path='/product/:id' element = {<Product />} />
      <Route path='/cart' element = {<CartPage />} />
      <Route path='/checkout/'>
      <Route path='' element={<CheckOut />} />
      <Route path=':id' element={<CheckOut />} />
      </Route>
      <Route path='/success' element={<Success />} />
    </Routes>
    </div>
  );
}

export default Home;
