import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { tTheme } from "@/utils/types/theme";
import { setCookie } from "@/utils/function/cookie";

export type tInitialState = {
    isDarkMode: tTheme,
};

const initialState: tInitialState = {
    isDarkMode: 'dark',
};

const onChangeSlice = createSlice({
    name: 'onChangeSlice',
    initialState: initialState,
    reducers: {
        setIsDarkMode: (state, action) => {
            const { value } = action.payload;
            state.isDarkMode = value;
            setCookie('theme', value, 900000);
        },
    },
})

export const {
    setIsDarkMode,
} = onChangeSlice.actions;
export default onChangeSlice.reducer;
export const onChangeSelector = (state: RootState) => state.onChangeSlice;