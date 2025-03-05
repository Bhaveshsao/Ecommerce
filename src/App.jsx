import ProductListing from "./components/ProductListing";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
