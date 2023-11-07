import React, { useEffect, useState } from 'react';
import Listedcard from './Listedcard';
import { useAuth } from '../context/AuthContext';


const Listed = () => { 
  const {user} = useAuth()
  const[productss,setProducts] = useState(null);

  useEffect(()=>{
    setProducts(user.products)
  },[user.products]);
  
  return(
  <div className="container mx-auto mt-8">
    {productss && productss.length > 0 && <> 
    <h2 className="text-2xl font-bold mb-4 text-center">YOUR LISTINGS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {productss.map(product => <Listedcard product={product} key={product._id}/>
      )}
    </div>
      </>
    }
  </div>
);
      };

export default Listed;
