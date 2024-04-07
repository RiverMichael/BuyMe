import Logo from "../../assets/buyme_logo.png";
import { useEffect, useState } from "react";
import CartIcon from "../CartIcon";
import { Link, NavLink } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";
import SearchBar from "../SearchBar";
import { IoSearchOutline } from "react-icons/io5";

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isNavOpen]);

  return (
    <>
      <div
        className={`navbar bg-ghost-white lg:border-b p-5 ${isSearchVisible ? "lg:border-b-0" : "border-b"} 
      `}>
        <div className="navbar-start">
          <div className="dropdown static flex items-center">
            <button aria-label="Show menu" tabIndex={0} role="button" className="btn btn-ghost p-0 lg:hidden">
              <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} size={30} direction="left" duration={0.5} rounded />
            </button>
            <ul
              tabIndex={0}
              className={`${isNavOpen ? "block" : "hidden"} menu dropdown-content z-[1] py-5 px-4 absolute top-20 mt-2 left-0 w-6/12 flex bg-ghost-white rounded-br-box border-b border-r`}>
              <li>
                <NavLink to="/" onClick={() => setIsNavOpen(false)} className={({ isActive }) => `text-base uppercase font-bold ${isActive ? "opacity-50" : "hover:text-primary"}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="contact" onClick={() => setIsNavOpen(false)} className={({ isActive }) => `text-base uppercase font-bold ${isActive ? "opacity-50" : "hover:text-primary"}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <Link to="/" className="navbar-brand ms-2 md:ms-0 min-w-28 max-w-44">
            <img src={Logo} alt="Logotype for BuyMe" className="w-full " />
          </Link>
        </div>

        <div className="navbar-center w-1/2 hidden lg:inline-flex">
          <SearchBar isVisible={true} />
        </div>

        <div className="navbar-end">
          <button aria-label="Search products" onClick={() => setIsSearchVisible(!isSearchVisible)} className="btn btn-ghost btn-circle lg:hidden">
            <IoSearchOutline size={30} />
          </button>
          <ul className="menu menu-horizontal hidden lg:flex">
            <li>
              <NavLink to="/" className={({ isActive }) => `text-base uppercase font-bold ${isActive ? "opacity-50" : "hover:text-primary transition-colors duration-300 ease-in-out"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="contact" className={({ isActive }) => `text-base uppercase font-bold ${isActive ? "opacity-50" : "hover:text-primary transition-colors duration-300 ease-in-out"}`}>
                Contact
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="cart"
            aria-label="View shopping cart"
            className={({ isActive }) => `${isActive ? "opacity-50" : "hover:text-primary  hover:scale-110 hover:-rotate-12 transition-transform duration-300 ease-in-out"}`}>
            <CartIcon />
          </NavLink>
        </div>
      </div>
      {isSearchVisible && (
        <div className={`bg-ghost-white pb-5 px-5 lg:hidden ${isSearchVisible ? "border-b border-gray-200" : ""}`}>
          <SearchBar isVisible={isSearchVisible} />
        </div>
      )}
    </>
  );
}
