import React, { useEffect, useState } from "react";
import Listedcard from "../components/Listedcard";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const Favourites = () => {
  const { user, userFavourites } = useAuth();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function getFavourites(){
      axios
        .get("http://localhost:5000/api/v1/users/favourites", {
          withCredentials: true,
        })
        .then((res) => {
          setProducts(res.data.data.products);
        })
        .catch((err) => {
        });
    }
    if(!userFavourites)
      getFavourites()
    else
      setProducts(userFavourites)
  }, []);
  return (
    <>
      {user ? (
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products &&
              products.map((product) => (
                <Listedcard key={product._id} product={product} />
              ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Please Log in</p>
      )}
    </>
  );
};

export default Favourites;
