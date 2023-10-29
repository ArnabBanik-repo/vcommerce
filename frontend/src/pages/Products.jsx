import React, { useEffect, useState } from "react";
import Listedcard from "../components/Listedcard";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/v1/products")
      .then((res) => {
        console.log(res.data.data.products);
        setProducts(res.data.data.products)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">PRODUCTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products && products.map((product) => (
          <Listedcard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
