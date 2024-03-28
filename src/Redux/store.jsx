import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './Reducers/index'

const store = configureStore({ 
 reducer:{
  search : searchSlice,
 },
  devTools : true
})

export default store;