import Logo from "../../../assets/buyme_logo.png";

export default function Footer() {
  return (
    <footer className="bg-ghost-white">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src={Logo} alt="Logotype for BuyMe" className="h-8 mb-4 sm:mb-0" />

          <ul className="flex flex-wrap gap-5 items-center mb-6 text-sm font-medium sm:mb-0 uppercase">
            <li className="hover:text-dark-gray cursor-pointer transition-colors duration-300 ease-in-out ">Home</li>
            <li className="hover:text-dark-gray cursor-pointer transition-colors duration-300 ease-in-out">Contact</li>
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
