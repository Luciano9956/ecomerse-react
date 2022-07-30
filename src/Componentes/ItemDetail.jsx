import React, {useState, useContext} from "react";
import ItemCount from './ItemCount';
import { Link } from "react-router-dom";
import { context } from '../context/CartContext'


const ItemDetail = ({item}) => {
const {addItem} = useContext(context);

  const [ comprar, SetComprar ]= useState(false);

  const onAdd = (contador) => {
    SetComprar(true)
    addItem({...item, quantity:contador});
  }

    return(
      <>
 <div key={item.id} className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={item.image}
              alt={item.image}
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{item.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Precio</h2>
            <p className="text-3xl text-gray-900">{item.price}</p>

            <form className="mt-10">
                {comprar ? 
                <div>
                <Link className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" to="/cart">
                Finalizar Compra </Link>
                <Link className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" to="/">Seguir comprando</Link>
                </div>
                :
                <ItemCount stock = {8} initial = {0} onAdd={onAdd}/>}
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">

            <div>
              <h3 className="sr-only">Descripcion</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{item.description}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

      </>
    )
}

export default ItemDetail