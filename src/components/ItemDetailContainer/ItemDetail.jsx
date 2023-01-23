import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productsById } from "../../services/mockServices";
import ItemCount from "./ItemCount";
import Button from "react-bootstrap/Button";

const ItemDetail = () => {
  const [products, setproducts] = useState([]);
  const [show, setShow] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    productsById(id).then((res) => setproducts(res));
  }, []);

  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="product-detail-container d-flex flex-column align-items-center">
        <h2>{products.nombre}</h2>

        <img className="img-fluid" src={products.img} alt="" width="400px" />
        <p>{products.descripcion}</p>

        <h3>$ {products.precio}.00</h3>
        <p>stock:{products.stock} </p>
        {show ? (
          <Link to="/cart">
            {" "}
            <Button variant="info">Terminar Compra </Button>
          </Link>
        ) : (
          <ItemCount
            show={show}
            setShow={setShow}
            stock={products.stock}
            products={products}
          />
        )}

        <Link to="/">
          {" "}
          <Button variant="danger" className="mt-2">
            Volver
          </Button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;
