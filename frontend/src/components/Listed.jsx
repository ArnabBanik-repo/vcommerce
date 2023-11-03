import React, { useEffect, useState } from 'react';
import Listedcard from './Listedcard';
import axios from 'axios';


const Listed = () => { 
  const[productss,setProduct] = useState(null);

  useEffect(()=>{
    axios
      .get("http://127.0.0.1:5000/api/v1/products",{withCredentials:true})
      .then((res) => {
        setProduct(res.data.data.products)
      })
      .catch((err) => {
        console.error(err);
      });

  },[]);
  
  return(
  <div className="container mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4 text-center">YOUR LISTINGS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      { productss && productss.map((product) => (
        <Listedcard product={product} key={product._id}/>
      ))}
    </div>
  </div>
);
      };

export default Listed;
