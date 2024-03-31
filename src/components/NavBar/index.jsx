import Logo from "../../assets/buyme_logo.png";
import { useState } from "react";
import CartIcon from "../CartIcon";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="navbar bg-ghost-white p-5 border-b">
      <div className="navbar-start">
        <div className="dropdown static flex items-center">
          <button onClick={() => setIsNavOpen(!isNavOpen)} tabIndex={0} className="p-0 lg:hidden">
            <Hamburger size={30} direction="left" duration={0.5} rounded />
          </button>
          <ul className={`${isNavOpen ? "block" : "hidden"} menu dropdown-content py-5 px-4 absolute top-20 mt-2 left-0 w-6/12 flex bg-ghost-white rounded-br-box border-b border-r `}>
            <li>
              <NavLink
                to="/"
                onClick={() => setIsNavOpen(false)}
                className={({ isActive }) => (isActive ? "text-dark-gray uppercase font-bold text-base" : "text-base uppercase font-bold hover:text-primary")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                onClick={() => setIsNavOpen(false)}
                className={({ isActive }) => (isActive ? "text-dark-gray uppercase font-bold text-base" : "text-base uppercase font-bold hover:text-primary")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to="/" className="navbar-brand ms-2 md:ms-0 max-w-44">
          <img src={Logo} alt="Logotype for BuyMe" className="w-full " />
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal hidden lg:flex">
          <li>
            <NavLink to="/" className={({ isActive }) => `text-base uppercase font-bold ${isActive ? "text-dark-gray" : "hover:text-primary transition-colors duration-300 ease-in-out"}`}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className={({ isActive }) => `text-base uppercase font-bold ${isActive ? "text-dark-gray" : "hover:text-primary transition-colors duration-300 ease-in-out"}`}>
              Contact
            </NavLink>
          </li>
        </ul>
        <NavLink to="cart">
          <CartIcon />
        </NavLink>
      </div>
    </div>
  );
}
