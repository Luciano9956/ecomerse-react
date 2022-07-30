import React from 'react';
import { FcShop } from "react-icons/fc";
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  const categorias = [
    { name: "Electronica", id: 0, route: "/category/electronics" },
    { name: "Joyeria", id: 1, route: "/category/jewelery" },
    { name: "Ropa de Hombre", id: 2, route: "/category/men's clothing" },
    { name: "Ropa de Mujer", id: 3, route: "/category/women's clothing" },
  ];
  return (
    <header className='flex justify-between items-center relative h-16 bg-amber-400'>
      <div  >
        <Link to='/'><FcShop className='flex w-12 h-12 pl-2'/></Link>
      </div>
    <nav>

      {categorias.map((categoria) => <NavLink className={'pr-8'} key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}


    </nav>
      <Link className='pr-8' to="/cart"> <CartWidget /> </Link>
    </header>
  )
}

export default NavBar

