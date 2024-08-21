import { Routes, Route, useLocation } from "react-router-dom";

import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";
import { Home } from "../Pages/Home";
import { CartFood } from "../Pages/CartFood";
import { NewProduct } from "../Pages/NewProduct";
import { CreateFood } from "../Pages/CreateFood";
import { EditFood } from "../Pages/EditFood";
import { Navbar } from "../components/Navbar";

export function AppRoutes() {
  const location = useLocation();
  const userDefault = !location.pathname.includes('admin')
  const isVisible = !['/signIn', '/signUp'].includes(location.pathname)

  return (
    <>
      {isVisible && <Navbar userDefault={userDefault} />}

      <Routes>
        <Route path="/" element={<Home userDefault={userDefault} />} />
        <Route path="/admin" element={<Home userDefault={userDefault} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/cart" element={<CartFood />} />
        <Route path="/new" element={<NewProduct />} />
        <Route path="/create" element={<CreateFood />} />
        <Route path="/edit" element={<EditFood />} />
      </Routes>
    </>
  );
}
