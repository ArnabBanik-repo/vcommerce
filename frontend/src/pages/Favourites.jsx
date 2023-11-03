import React, { useEffect, useState } from "react";
import Listedcard from "../components/Listedcard";
import axios from "axios";

const Favourites = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/users/favourites",{withCredentials:true}) 
      .then((res) => {
        setProducts(res.data.data.products)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">YOUR FAVOURITES</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products && products.map((product) => (
          <Listedcard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
