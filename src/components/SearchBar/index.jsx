import { useState, useEffect } from "react";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import useFetch from "../Hooks/useFetch";
import { API_BASE_URL } from "../../shared/api";
import { Link } from "react-router-dom";

export default function SearchBar({ isVisible }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { data, isLoading, isError } = useFetch(API_BASE_URL);
  const products = data?.data;

  useEffect(() => {
    if (searchTerm && products) {
      const filteredSuggestions = products.filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()));
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [searchTerm, products]);

  return (
    <div className={`form-control items-center max-w-xl mx-auto w-full relative ${!isVisible ? "hidden" : ""}`}>
      <label className="input input-bordered bg-snow-mist rounded flex items-center gap-2 w-full px-2 border-silver-chalice hover:border-gunmetal-gray focus:outline-none focus-within:outline-none">
        <IoSearchOutline size={20} />
        <input
          type="text"
          placeholder="Search products"
          className="w-full"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onBlur={() => {
            setTimeout(() => {
              setShowSuggestions(false);
            }, 100);
          }}
          onFocus={() => searchTerm && setShowSuggestions(true)}
        />
        {searchTerm && (
          <button
            onClick={() => {
              setSearchTerm("");
            }}
            className="text-lg text-gray-400 hover:text-gray-600">
            <IoCloseOutline size={20} />
          </button>
        )}
      </label>
      {showSuggestions && !isLoading && !isError && (
        <ul className="menu rounded px-0 bg-snow-mist border border-gray-200 w-full absolute z-50 top-full">
          {suggestions.length > 0 ? (
            suggestions.map(({ title, id }) => (
              <li key={id} className="hover:bg-gray-200 text-base">
                <Link to={`products/${id}`}>{title}</Link>
              </li>
            ))
          ) : (
            <li className="text-base p-2 text-center">Sorry! We have no product that match this search.</li>
          )}
        </ul>
      )}
    </div>
  );
}
