import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './Reducers/SearchTerm/index'
import getAllSlice from  './Reducers/GetRecipe/index'
//j'utilse configure store a la place de createStore(out to date)
const store = configureStore({ 
 reducer:{
  search : searchSlice,
  getAllRepice : getAllSlice,
 },
  devTools : true //pour activer l'extension de navigateur
})

export default store;