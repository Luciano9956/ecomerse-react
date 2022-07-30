import React, { useState, useContext } from "react";
import Context, { context } from '../context/CartContext';
import { db } from '../firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';


export const Form = () => {
    const { productosCarrito, clear, totalCompra } = useContext(context)
    const [idOrden, setIdOrden] = useState()
    const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: '',
        Mensaje: ''
    })
    const { Nombre, Email, Telefono, Mensaje } = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generarPedido = async (data) => {
        try {
            const col = collection(db, 'ventas')
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            clear()
        } catch (error) {
            <p>error</p>
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = productosCarrito.map(e => { return { id: e.id, Titulo: e.Nombre, Precio: e.precio, Cantidad: e.Cantidad } })
        const total = totalCompra()
        const data = { buyer, dia, items, total }
        generarPedido(data)
    }

    return (
        <>
            {loading ? <p>cargando</p>
                : (!idOrden && <div>
                    <form onSubmit={enviar}>
                        <div>
                            <h2> Datos Comprador</h2>
                        </div>
                        <div>
                            <p>
                                <input type="text" name="Nombre" onChange={Input} value={Nombre} placeholder="Nombre" required />
                            </p>
                            <p>
                                <input type="email" name="Email" onChange={Input} placeholder="Mail" value={Email} required />
                            </p>
                            <p>
                                <input type="number" name="Telefono" onChange={Input} placeholder="Teléfono" value={Telefono} required />
                            </p>

                            <textarea name="Mensaje" onChange={Input} placeholder="Dejanos tu comentario..." value={Mensaje} id="" cols="30" rows="10" required></textarea>

                            <p>
                                <button className="bg-indigo-600 p-1 text-white cursor-pointer" >Enviar
                                </button>
                            </p>
                        </div>
                    </form>
                </div>)}
            <div>
                {
                    idOrden && (
                        <div>
                            <h3>Gracias por su Compra</h3>
                            <h4>{`Su código de operación es: ${idOrden}`}</h4>
                            <h4>{`Le enviarenos a ${Email} la factura electrónica de su compra`}</h4>
                            <div ><Link to={'/'} >Realizar otra compra </Link></div>

                        </div>
                    )
                }
            </div>
        </>
    )

}
