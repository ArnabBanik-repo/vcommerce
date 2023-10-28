import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Userinfo from "./pages/Userinfo";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
                <Home /> 
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="products" element={<Products />} />
          <Route path="userinfo" element={<Userinfo />} />
          <Route path ="singleproduct/:productid" element={<SingleProduct />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;