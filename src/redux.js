
/* Redux */

import { configureStore, createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: { open: false },
    reducers: {
        toggleNav: (state, action) => {
            state.open = !state.open;
            //console.log("Nav is open : " + state.open);
        },
        closeNav: (state, action) => {
            state.open = false;
            //console.log("Nav is open : " + state.open);
        }
    }
});

export const store = configureStore({
    reducer: {
        nav: navSlice.reducer
    }
});
