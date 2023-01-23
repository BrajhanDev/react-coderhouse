import React from 'react';
import { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';

const Cart = () => {

    const {carrito} = useContext(GlobalContext)
    console.log(carrito);
    return (
        <div>
           <p>{carrito.nombre}</p>
           <p>{carrito.cantidad}</p>
        </div>
    );
};

export default Cart;