import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    loading: false,
    data: [],
    error: null
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        SEARCH_TERM_REQUEST(state) {
            state.loading = true,
                state.data = [],
                state.error = null
        },
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


