import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productsById } from "../../services/mockServices";
import ItemCount from "./ItemCount";

const ItemDetail = () => {
  const [products, setproducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    productsById(id).then((res) => setproducts(res));
  }, []);

  return (
    <div className="container mt-3 d-flex justify-content-center">
      <div className="product-detail-container d-flex flex-column align-items-center">
        
          <h2 >{products.nombre}</h2>

          <img className="img-fluid" src={products.img} alt="" width="400px" />
          <p>{products.descripcion}</p>

          <h3>$ {products.precio}.00</h3>
          <p>stock:{products.stock} </p>
          <ItemCount stock={products.stock} />
       
        
      </div>
    </div>
  );
};

export default ItemDetail;
