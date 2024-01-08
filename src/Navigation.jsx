import { Outlet, NavLink } from "react-router-dom";
import ButtonTestcomp from "./assets/ButtonComptest.jsx";
import Footer from "./Footer.jsx";
export const Navigation = () => {
  return (
    <>
      <nav className="nav-container">
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="Shop">
          Shop
        </NavLink>
        <NavLink className="nav-item basket" to="Checkout">
          <ButtonTestcomp />
        </NavLink>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};
