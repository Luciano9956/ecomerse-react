import React, { useContext} from "react";
import { context } from '../context/CartContext';
import { Link } from "react-router-dom";
 
const Cart = () => {
    const { removeItem, clear, totalCompra, productosCarrito} = useContext(context);


    return(
        <>
        {productosCarrito.length === 0 ? <div><h1> Aun no añadiste productos al Carrito </h1> <Link className="bg-indigo-600 p-1 text-white cursor-pointer" to="/">Ir a productos</Link>
        </div>
        : <>{productosCarrito.map(item =>
            <div>
         <h2 key={item.id}> {item.title}  <button className="bg-indigo-600 p-1 text-white cursor-pointer" onClick={()=>removeItem(item.id)}>Remover</button> </h2>
         <p>x {item.quantity}</p>
         <p>${item.price*item.quantity}</p>
         
         </div>
            )}
            <div>Total Compra: $ {totalCompra()}</div>
            <button className="bg-indigo-600 p-1 text-white cursor-pointer" onClick={clear}> limpiar</button>
            <button className="bg-indigo-600 p-1 text-white cursor-pointer" > <Link to={'/form'}>Finalizar compra</Link></button>
            </>}
        
        
        </>
    )
}

export default Cart; 