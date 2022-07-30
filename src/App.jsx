import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import './App.css';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Cart from './Componentes/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartContext  from './context/CartContext';
import  { Form } from '../src/Componentes/form'

const App = () => {
  return (
    <BrowserRouter>
    <CartContext> 
    <NavBar />
    <Routes>
    <Route path="/" element={<ItemListContainer name = 'ecomerse' />}/>
    <Route path="/category/:categoriaSelec" element={<ItemListContainer name = 'ecomerse'  />}/>
    <Route path="/item/:Id" element={<ItemDetailContainer />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/form" element={<Form/>} />  
    </Routes>
    </CartContext>
    </BrowserRouter>
    
  );
}

export default App;
