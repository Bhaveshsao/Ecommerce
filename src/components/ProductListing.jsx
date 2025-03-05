import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/productSlice";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const ProductListing = () => {
  const { products, searchQuery, categoryFilter, cartItems } = useSelector(
    (store) => store.products
  );
  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    const matchesCategory = categoryFilter
      ? product.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative flex flex-col items-center p-6 justify-center bg-gray-100 min-h-screen">
      {/* Page Title with Margin Fix */}
      <h1 className="text-4xl sm:text-5xl text-center font-extrabold mt-6 mb-4 text-indigo-600">
        E-Commerce Store
      </h1>

      {/* Floating Cart Button - Positioned Responsively */}
      <Link
        to="/cart"
        className="sm:static md:fixed md:top-5 md:right-10 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
      >
        🛒 Cart: {cartItems.length}
      </Link>

      {/* Search Bar */}
      <SearchBar />

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border border-gray-200 bg-white w-full max-w-[360px] mx-auto flex flex-col items-center rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Product Image */}
            <div className="w-full h-60 overflow-hidden rounded-xl bg-gray-200">
              <img
                className="w-full h-full object-cover"
                src={product.image}
                alt={product.name}
              />
            </div>

            {/* Product Details */}
            <h1 className="text-xl font-bold text-center text-gray-800 mt-4">
              {product.name}
            </h1>
            <h2 className="text-lg text-indigo-600 font-semibold">
              {product.price}
            </h2>

            {/* Add to Cart Button */}
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
