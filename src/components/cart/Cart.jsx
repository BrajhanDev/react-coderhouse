import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import GlobalContext from "../../context/GlobalContext";

const Cart = () => {
  const navigate = useNavigate()
  const { carrito, setcarrito, countCart, setcountCart, settotal } = useContext(GlobalContext);
 
 
let suma = carrito.reduce((acc, prod) => acc + prod.subtotal,0 ) 




const deleteProduct = (id) => {

    let index = carrito.findIndex(prod => prod.id == id)
    carrito.splice(index,1)
    setcarrito(carrito)
    setcountCart(countCart -1)
    settotal(suma)
}

const add = (id) => {
    let index = carrito.findIndex(prod => prod.id == id)
    carrito[index].cantidad += 1;
    carrito[index].subtotal = carrito[index].cantidad * carrito[index].precio
    setcarrito([...carrito]);
    settotal(suma)
    
}

const menos = (id) => {
    let index = carrito.findIndex(prod => prod.id == id)
    carrito[index].cantidad -= 1;
    carrito[index].subtotal = carrito[index].cantidad * carrito[index].precio
    setcarrito([...carrito]);
    settotal(suma)
}

const deleteAll = () => {
carrito.splice(0, carrito.length)
setcarrito([...carrito]);

settotal(suma)
}

const confirmarCompra = () => {
  settotal(suma)
navigate('/checkout')
}

return (
    <div className="d-flex flex-column align-items-center">
        <h2>MI CARRITO</h2>
      {carrito.map((cart) => (
       <div key={cart.id} className="border w-75 d-flex justify-content-between p-2">
        <div className="d-flex ">
        <img src={cart.img} alt="" width='200px'/>
        <div>
            <h4>{cart.nombre}</h4>
            <p>$ {cart.precio}</p>
            <button className="btn btn-danger" onClick={()=> deleteProduct(cart.id)}>Delete</button>
        </div>
        </div>
        <div>
            <h5>Cantidad</h5>
            <Button variant="outline-secondary" onClick={()=> menos(cart.id)}> - </Button>
            <span className="mx-2">{cart.cantidad}</span>
            <Button variant="outline-secondary" onClick={()=> add(cart.id)}> + </Button>
        </div>
        
       </div>
      ))}
      <div className="d-flex gap-2 mt-2">
      <h3>Total: $ {suma} </h3>
      <Button variant="danger" onClick={deleteAll}>Borrar Todo</Button>
      <Button variant="success" onClick={confirmarCompra}>Confirmar Compra</Button>
      </div>
    </div>
  );
};

export default Cart;
