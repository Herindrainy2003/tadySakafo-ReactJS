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
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        //premier reload
        SEARCH_TERM_REQUEST(state) {
            state.loading = true,
            state.data = [],
            state.error = null
        },
        //Quand les requetes reussie
        SEARCH_TERM_SUCCES(state, action) {
            state.loading = false,
            state.data = action.payload

        },
        SEARCH_TERM_FAIL(state, action) {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        }
    }
})

export const { SEARCH_TERM_FAIL, SEARCH_TERM_REQUEST, SEARCH_TERM_SUCCES } = searchSlice.actions;
export default searchSlice.reducer;


