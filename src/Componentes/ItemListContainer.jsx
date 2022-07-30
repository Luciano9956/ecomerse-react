import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'

const ItemListContainer = (prop) => {

  const { categoriaSelec } = useParams();
  const { name } = prop;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const consulta = categoriaSelec
      ? query(collection(db, 'productos'), where('category', '==', categoriaSelec))
      : collection(db, 'productos');

    getDocs(consulta)
      .then(result => {
        const lista = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProductos(lista);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [categoriaSelec]);


  return (
    <>
    
      {loading ? <p>cargando...</p> : <Itemlist productos={productos} />}


    </>
  )
}

export default ItemListContainer

