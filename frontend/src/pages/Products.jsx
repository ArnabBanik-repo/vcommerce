import React, { useEffect, useState } from "react";
import Listedcard from "../components/Listedcard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/v1/products",{withCredentials:true})
      .then((res) => {
        setProducts(res.data.data.products)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {products && products.map((product) => (
          <Listedcard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
