import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'
const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info('increased product quantity', {
          position: 'top-right',
          autoClose: 100,
        })
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to the cart`, {
          position: 'top-right',
          autoClose: 100,
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromcart(state, action) {
      const newcartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      state.cartItems = newcartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      toast.error(`${action.payload.name} removed from cart`, {
        position: 'top-right',
        autoClose: 100
      })
    },
    decreaseCartItem(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${action.payload.name} cart quantity`, {
          position: 'top-right',
          autoClose: 100
        })
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const newcartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        state.cartItems = newcartItems;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        toast.error(`${action.payload.name} removed from cart`, {
          position: 'top-right',
          autoClose: 100
        })
      }
    },
    clearCart(state, action) {
      state.cartItems = []
      toast.error('Cleared the Products in cart', {
        position: 'top-right',
        autoClose: 100
      })
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price.slice(1) * cartQuantity;
        cartTotal.total += itemTotal
        cartTotal.quantity += cartQuantity
        return cartTotal;
      }, {
        total: 0, quantity: 0
      })
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    }
  },
});
export const { addToCart, removeFromcart, decreaseCartItem, clearCart, getTotals } = cartSlice.actions;
export default cartSlice.reducer;
