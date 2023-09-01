import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from './reducers/productReducer'
// import todosReducer from '../features/todos/todosSlice'
// import filtersReducer from '../features/filters/filtersSlice'
import { productApi } from './reducers/productAPi'
import cartReducer from "./reducers/cartSlice"
import authReducer from "./reducers/authSlice"
 const store = configureStore({
  reducer: {
    // products: productReducer,
    // filters: filtersReducer
    cart:cartReducer,
    auth:authReducer,
    [productApi.reducerPath]:productApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware().concat(productApi.middleware),
})
export default store