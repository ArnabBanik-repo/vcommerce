import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Userinfo from "./pages/Userinfo";
import Contact from "./pages/Contact";
import Favourites from "./pages/Favourites";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
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
          <Route path="login" element={<Login />} />
          <Route path ="singleproduct/:productid" element={<SingleProduct />}/>
          
        </Route>
        <Route path="register" element={<Register/>}></Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
