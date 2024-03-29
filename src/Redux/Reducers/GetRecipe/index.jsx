import { createSlice } from "@reduxjs/toolkit"

//initialisation de nos state
const initialState = {
    loading: false,
    data: [],
    error: null
}

/**
 * J'utilise createSlice a la place de combineReducers
 */
const getAllSlice = createSlice({
    name: 'allRecipe',
    initialState,
    reducers: {
        //premier reload
        GET_RECIPE_REQUEST(state) {
            state.loading = true,
            state.data = [],
            state.error = null
        },
        //Quand les requetes reussie
        GET_RECIPE_SUCCES(state, action) {
            state.loading = false,
            state.data = action.payload

        },
        GET_RECIPE_FAIL(state, action) {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        }
    }
})

export const { GET_RECIPE_FAIL, GET_RECIPE_REQUEST, GET_RECIPE_SUCCES } = getAllSlice.actions;
export default getAllSlice.reducer;


