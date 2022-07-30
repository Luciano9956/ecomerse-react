import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    useEffect(() => {
        console.log('useEffect')
    });

    const sumar = () => {
        contador < stock && setContador(contador + 1)
        contador >= stock && alert("No hay stock")
    };

    const restar = () => {
        contador > initial && setContador(contador - 1)
        contador < initial && setContador(1)
    };

    const reset = () => {
        setContador(0);
    };
    const agregar = () => {
        onAdd(contador);
    }

    return (
        <>

            <a className="bg-indigo-600 p-5 text-white cursor-pointer" onClick={restar}>-</a>
            <h2 className='p-5'>{contador}</h2>
            <a className="bg-indigo-600 p-5 text-white cursor-pointer" onClick={sumar}>+</a>

            <a className="bg-indigo-500 p-5 text-white cursor-pointer" onClick={reset}>Reset</a>
            {contador >= 1 ?
                <a className="bg-green-600 p-5 text-white cursor-pointer" onClick={agregar}>Agregar al Carrito</a> :
                <a className="bg-red-300 p-1 text-white" >Aun no agregaste productos</a>}


        </>
    )
}


export default ItemCount

