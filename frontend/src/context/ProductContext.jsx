import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';
import env from '../config';

const ProductContext = createContext();


export const ProdProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`${env.BACKEND_URI}/api/v1/products`, { withCredentials: true })
      .then((res) => {
        setProducts(res.data.data.products)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProd = () => {
  return useContext(ProductContext);
};

