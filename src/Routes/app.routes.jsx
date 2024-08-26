import { Routes, Route, useLocation } from "react-router-dom";

import { SignIn } from "../Pages/SignIn";
import { SignUp } from "../Pages/SignUp";
import { Home } from "../Pages/Home";
import { CartFood } from "../Pages/CartFood";
import { CreateFood } from "../Pages/CreateFood";
import { EditFood } from "../Pages/EditFood";
import { Navbar } from "../components/Navbar";

export function AppRoutes() {
  const location = useLocation();
  const userDefault = !location.pathname.includes('admin')
  const isVisible = !['/login', '/register'].includes(location.pathname)

  return (
    <>
      {isVisible && <Navbar userDefault={userDefault} />}

      <Routes>
        <Route path="/" element={<Home userDefault={userDefault} />} />
        <Route path="/admin" element={<Home userDefault={userDefault} />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/cart" element={<CartFood userDefault={userDefault} />} />
        <Route path="/admin/new" element={<CartFood userDefault={userDefault} />} />
        <Route path="/admin/create" element={<CreateFood />} />
        <Route path="/admin/edit" element={<EditFood />} />
      </Routes>,
      
    </>
  );
}
