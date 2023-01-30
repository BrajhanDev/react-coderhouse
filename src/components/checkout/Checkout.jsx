import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import GlobalContext from "../../context/GlobalContext";
import { createOrder } from "../../services/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { carrito, total, setcarrito, setcountCart} = useContext(GlobalContext);
    const navigate = useNavigate()
const finalizarCompra = (e) => {
    e.preventDefault()

    const order = {
        comprador: {
            nombre: e.target.nombre.value,
            email: e.target.email.value,
            telefono: e.target.fono.value
        },
        items: carrito,
        fecha: new Date(),
        total: total
        
        
    }
    
    createOrder(order).then( id => {
        Swal.fire(
            'Good job!',
            `Compra Confirmada, los datos de su pedido se le envio a su correo! con el codigo \n ${id}`,
            'success'
          )
    })
    carrito.splice(0, carrito.length)
    setcarrito([...carrito]);
    setcountCart(0)
   

      navigate('/')
}

  return (
    <div className="">
       
      <h1 className="text-center">Checkout</h1>
      <Form className="container w-50" onSubmit={finalizarCompra}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="text-left">Nombre</Form.Label>
          <Form.Control type="text" placeholder="Jhon Doe" name="nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="1234-145" name="fono" />
        </Form.Group>
        
      <Button variant="primary" type="submit">
        confirmar compra
      </Button>
      </Form>

      
    </div>
  );
};

export default Checkout;
