import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
import ShopPage from "@/components/pages/ShopPage";
import CartPage from "@/components/pages/CartPage";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import LoginPage from "./components/pages/LoginPage";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/likes" element={<CartPage />} />
          {/*TODO <Route path="/cart" element={<CartPage />} />  TODO*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
