import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery, setCategoryFilter } from "../store/slices/productSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value.toLowerCase()));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    dispatch(setCategoryFilter(e.target.value));
  };

  return (
    <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center gap-4 md:gap-5 my-4 w-full max-w-2xl">
      {/* Search Bar */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        className="p-3 border border-gray-300 rounded-lg w-full sm:w-full md:w-72 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        placeholder="Search for products..."
      />

      {/* Category Dropdown */}
      <select
        value={category}
        onChange={handleCategoryChange}
        className="p-3 border border-gray-300 rounded-lg w-full sm:w-full md:w-52 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Categories</option>
        <option value="Mobile">Mobile</option>
        <option value="Laptop">Laptop</option>
        <option value="Accessories">Accessories</option>
        <option value="TV">TV</option>
      </select>
    </div>
  );
};

export default SearchBar;
