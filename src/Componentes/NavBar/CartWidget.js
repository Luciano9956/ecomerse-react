import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { context } from "../../context/CartContext";

const CartWidget =  () => {

    const { qtyCompra } = useContext(context);

    return (

        <>
      <FaShoppingCart className="text-white" size={30}/>
         { qtyCompra >= 1 ? <span class="new badge">{qtyCompra}</span> : null }
        
        </>
    )

}

export default CartWidget 