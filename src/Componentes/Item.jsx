import React from "react";
import { Link } from "react-router-dom";


const Item = ({ producto }) => {

  return (

    <div  className=" max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
      <div className="  mt-6 grid grid-cols- gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div>
          <div>
          <img src={producto.image} />
            <span>{producto.title}</span>
            <Link to={`/item/${producto.id}`} className="bg-indigo-600 p-1 text-white cursor-pointer"><i>Mas Detalles</i></Link>
          </div>
          <div className="text-sm font-medium text-gray-900">
            <p>${producto.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#fce4ec"
  },
}