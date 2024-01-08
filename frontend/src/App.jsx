import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProdProvider } from "./context/ProductContext";
import Userinfo from "./pages/Userinfo";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AddListing from "./pages/AddListing";
import { FaHome } from "react-icons/fa";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProdProvider>
          <Header />
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="products" element={<Products />} />
              <Route path="userinfo" element={<Userinfo />} />
              <Route path="login" element={<Login />} />
              <Route path="singleproduct/:productid" element={<SingleProduct />} />
            </Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="forgotPassword" element={<ForgotPassword />}></Route>
            <Route path="resetPassword/:id" element={<ResetPassword />}></Route>
            <Route path="addlisting" element={<AddListing />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
          <Link to={'/'} className='fixed bottom-5 right-5 h-12 w-12 bg-green-500 rounded-full shadow-md grid place-items-center text-white hover:bg-green-600 transition-all'>
            <FaHome />
          </Link>
        </ProdProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
