import React from 'react';
import Listedcard from './Listedcard';


const Listed = ({products}) => { 

  return(
  <div className="w-3/4 mt-10 mx-auto">
    {products && products.length > 0 && <> 
    <h2 className="text-2xl font-bold mb-4 text-center">Your Listings</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {products.map(product => <Listedcard product={product} key={product._id}/>
      )}
    </div>
      </>
    }
  </div>
);
      };

export default Listed;
