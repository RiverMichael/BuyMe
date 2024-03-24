import Logo from "../../assets/buyme_logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import CartIcon from "../CartIcon";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="navbar bg-snow-mist p-5">
      <div className="navbar-start">
        <div className="dropdown static">
          <button onClick={() => setIsNavOpen(!isNavOpen)} tabIndex={0} className="btn btn-ghost p-0 md:hidden">
            <IoMenuOutline size={40} />
          </button>
          <ul className={`${isNavOpen ? "block" : "hidden"} menu dropdown-content py-8 px-4 absolute left-0 w-screen flex gap-2 bg-snow-mist`}>
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

        <Link to="/" className="navbar-brand hidden md:flex">
          <img src={Logo} alt="Logotype for BuyMe" className="w-full max-w-72" />
        </Link>
      </div>

      <div className="navbar-center md:hidden flex">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logotype for BuyMe" className="w-full max-w-44 sm:max-w-56 mx-2" />
        </Link>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal hidden md:flex">
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
        <NavLink to="checkout">
          <CartIcon />
        </NavLink>
      </div>
    </div>
  );
}
