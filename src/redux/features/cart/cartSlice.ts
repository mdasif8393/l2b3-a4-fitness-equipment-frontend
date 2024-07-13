import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const existingProduct = state.products.find(
        (product: any) => product._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      const existingProduct = state.products.find(
        (product: any) => product._id === action.payload._id
      );
      if (existingProduct && existingProduct?.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product: any) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
