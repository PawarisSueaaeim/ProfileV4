import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

export type tInitialState = {
    isDarkMode: boolean,
};

const initialState: tInitialState = {
    isDarkMode: false,
};

const onChangeSlice = createSlice({
    name: 'onChangeSlice',
    initialState: initialState,
    reducers: {
        setIsDarkMode: (state, _) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
})

export const {
    setIsDarkMode,
} = onChangeSlice.actions;
export default onChangeSlice.reducer;
export const onChangeSelector = (state: RootState) => state.onChangeSlice;