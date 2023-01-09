import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productsById } from '../../services/mockServices';

const ItemDetail = () => {

    const [products, setproducts] = useState([])
    const {id} =  useParams()
    
    useEffect(()=> {
        productsById(id)
        .then( res => setproducts(res) )
    },[])

   

    return (
        <div>
            <img src={products.img} alt="" />
            <p>{products.nombre}</p>
        </div>
    );
};

export default ItemDetail;


