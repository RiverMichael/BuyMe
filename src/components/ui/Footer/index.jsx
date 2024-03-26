import { Link } from "react-router-dom";
import Logo from "../../../assets/buyme_logo.png";

export default function Footer() {
  return (
    <footer className="bg-ghost-white mt-auto border-t">
      <div className="w-full mx-auto p-4 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/">
            <img src={Logo} alt="Logotype for BuyMe" className="h-8 mb-4 sm:mb-0" />
          </Link>

          <ul className="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium sm:mb-0 uppercase">
            <li>
              <Link to="/" className="hover:text-dark-gray cursor-pointer transition-colors duration-300 ease-in-out">
                Home
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-dark-gray cursor-pointer transition-colors duration-300 ease-in-out">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto" />
        <span className="block text-sm sm:text-center">
          Copyright &copy; 2024 |{" "}
          <a href="https://www.michaelriver.dev" target="_blank" className="hover:text-dark-gray transition-colors duration-300 ease-in-out">
            Michael Nilsson
          </a>
        </span>
      </div>
    </footer>
  );
}
