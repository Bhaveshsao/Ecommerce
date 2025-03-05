import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Apple iPhone 14",
      category: "Mobile",
      price: "₹72,999",
      image:
        "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      category: "Mobile",
      price: "₹74,999",
      image:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/01/samsung-galaxy-s23-plus-lavender-render-1.jpg",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      category: "Accessories",
      price: "₹29,990",
      image: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg",
    },
    {
      id: 4,
      name: "Apple MacBook Pro (M2)",
      category: "Laptop",
      price: "₹1,29,900",
      image:
        "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg",
    },
    {
      id: 5,
      name: "Dell XPS 13",
      category: "Laptop",
      price: "₹1,44,990",
      image:
        "https://microless.com/cdn/products/ed1893149ad867b15577c751758393d9-hi.jpg",
    },
    {
      id: 6,
      name: "Samsung 4K UHD TV (55-inch)",
      category: "TV",
      price: "₹52,990",
      image:
        "https://www.bhphotovideo.com/images/images2500x2500/samsung_qn55q70aafxza_q70a_55_class_hdr_1620612.jpg",
    },
    {
      id: 7,
      name: "Sony WH-1000XM5 Headphones",
      category: "Accessories",
      price: "₹29,990",
      image: "https://m.media-amazon.com/images/I/41qwg67HMlL._AC_SY879_.jpg",
    },
    {
      id: 8,
      name: "Apple MacBook Pro (M2)",
      category: "Laptop",
      price: "₹1,29,900",
      image:
        "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg",
    },
    {
      id: 9,
      name: "Dell XPS 13",
      category: "Laptop",
      price: "₹1,44,990",
      image:
        "https://microless.com/cdn/products/ed1893149ad867b15577c751758393d9-hi.jpg",
    },
  ],
  cartItems:
    JSON.parse(localStorage.getItem("cartItems"))?.filter(
      (item) => item.price
    ) || [],
  searchQuery: "",
  categoryFilter: "",
};

const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      saveCartToLocalStorage(state.cartItems);
    },
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      saveCartToLocalStorage(state.cartItems);
    },
    incrementQuantity: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
      saveCartToLocalStorage(state.cartItems);
    },
    decrementQuantity: (state, action) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (existingProduct && existingProduct.quantity > 0) {
        existingProduct.quantity -= 1;
      }
      saveCartToLocalStorage(state.cartItems);
    },
  },
});

export const {
  setSearchQuery,
  setCategoryFilter,
  addToCart,
  removeCart,
  incrementQuantity,
  decrementQuantity,
} = productSlice.actions;

export default productSlice.reducer;
