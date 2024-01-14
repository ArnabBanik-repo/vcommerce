import React from "react";
import Listedcard from "../components/Listedcard";
import { useProd } from "../context/ProductContext";
import Filter from "../components/Filter";

const Products = () => {
  const { products } = useProd();
  const content = (
    <div className="flex gap-8 mx-[5vw] md:mx-0 mt-10 md:px-[3vw]">
      <div className="w-5/6">
        <Filter />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products && products.map((product) => <Listedcard key={product._id} product={product} />)}
      </div>
    </div>
  );
  const loading = (
    <div className="grid place-items-center h-[90vh]">
      <h1 className="text-6xl">Loading ...</h1>
    </div>
  )
  if (!products)
    return loading;
  return content;
};

export default Products;
