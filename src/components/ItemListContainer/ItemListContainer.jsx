import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allProducts, productsByCategory } from "../../services/mockServices";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [products, setproducts] = useState([]);
  const [category, setcategory] = useState([]);

  useEffect(() => {
    allProducts().then((res) => setproducts(res));
    productsByCategory(categoryId).then((res) => setcategory(res));
  }, [products, category]);

//   useEffect(() => {
//     productsByCategory(categoryId).then((res) => setcategory(res));
//   }, []);

  

  return (
    <div className="container">
      <div className="row gap-2 justify-content-center">
        {categoryId
          ? 
          category.map((prod) => <ItemList key={prod.id} prod={prod} />)
          : products.map((prod) => <ItemList key={prod.id} prod={prod} />)}
      </div>
    </div>
  );
};

export default ItemListContainer;
