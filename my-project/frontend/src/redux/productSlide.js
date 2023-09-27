import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    // cartItem: [],
  };

  export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
      setDataProduct: (state, action) => {
            console.log(action)
            state.productList = [...action.payload]
      }
    }
})

export const {
    setDataProduct
    // setDataProduct,
    // addCartItem,
    // deleteCartItem,
    // increaseQty,
    // decreaseQty,
  } = productSlice.actions;

export default productSlice.reducer;