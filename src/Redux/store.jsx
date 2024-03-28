import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './Reducers/index'

//j'utilse configure store a la place de createStore(out to date)
const store = configureStore({ 
 reducer:{
  search : searchSlice,
 },
  devTools : true //pour activer l'extension de navigateur
})

export default store;