import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();


export const ProdProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/v1/products", { withCredentials: true })
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

