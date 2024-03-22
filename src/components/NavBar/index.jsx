import Logo from "../../assets/buyme_logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import CartIcon from "../CartIcon";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <nav>
      <div className="w-full flex items-center justify-between mx-auto p-4 sticky ">
        <button onClick={() => setIsNavOpen(!isNavOpen)} data-collapse-toggle="navbar" type="button" className="md:hidden" aria-controls="navbar" aria-expanded="false">
          <IoMenuOutline size={30} />
        </button>

        <Link to="/">
          <img src={Logo} alt="Logotype for BuyMe" className="w-44 md:w-56 lg:w-64  mx-5 md:mx-0" />
        </Link>

        <div
          id="navbar"
          className={`${
            isNavOpen ? "block" : "hidden"
          } w-screen text-center fixed top-16 left-0 p-5 md:block md:w-auto md:ms-auto md:me-5 md:relative md:top-auto md:p-0 bg-ghost-white md:bg-inherit border-b border-silver-chalice md:border-0`}>
          <ul className="flex flex-col md:flex-row gap-5 items-center">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsNavOpen(false)}
                className={({ isActive }) => (isActive ? "text-dark-gray uppercase font-bold" : "uppercase font-bold hover:text-sky-blue")}
                aria-current="page">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" onClick={() => setIsNavOpen(false)} className={({ isActive }) => (isActive ? "text-dark-gray uppercase font-bold" : "uppercase font-bold hover:text-sky-blue")}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <NavLink to="checkout" className={({ isActive }) => (isActive ? "text-dark-gray uppercase font-bold" : "uppercase font-bold hover:text-sky-blue")}>
          <CartIcon />
        </NavLink>
      </div>
    </nav>
  );
}
