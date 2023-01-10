import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const ItemList = ({prod}) => {

  const navigate = useNavigate()

  const redirectItemDetail = (id) => {
    navigate(`/item/${id}`)
  }

  return (
    
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.img}  />
        <Card.Body>
          <Card.Title>{prod.nombre}</Card.Title>
          {/* <Card.Text>
            {prod.descripcion}
          </Card.Text> */}
          <Card.Text>
            $ {prod.precio}
          </Card.Text>
          <Button variant="primary" onClick={()=>redirectItemDetail(prod.id)}> Ver Detalles</Button>
        </Card.Body>
      </Card>
    
  );
};

export default ItemList;
