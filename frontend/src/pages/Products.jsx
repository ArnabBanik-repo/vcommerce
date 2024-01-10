import React  from "react";
import Listedcard from "../components/Listedcard";
import { useProd } from "../context/ProductContext";

const Products = () => {
  const { products } = useProd();
  return (
    <div className="mx-[5vw] mt-10 md:px-[4.5vw]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products && products.map((product) => (
          <Listedcard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
