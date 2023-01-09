
import React, { useEffect, useState } from 'react';
import { allProducts } from '../../services/mockServices';
import ItemList from './ItemList';

const ItemListContainer = () => {

    const [products, setproducts ] = useState([])

    useEffect(()=> {
        allProducts()
        .then( res => setproducts(res))

    },[])

    return (
        <div className='container'>
            <div className='row gap-2'>
            {
                products.map( prod => (
                    <ItemList key={prod.id} prod={prod} />
                ))
            }
           </div>
        </div>
    );
};

export default ItemListContainer;


