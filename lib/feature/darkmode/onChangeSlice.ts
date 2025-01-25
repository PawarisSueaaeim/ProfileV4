import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { getCookie, setCookie } from "@/helper/cookie";

export type tInitialState = {
    isDarkMode: boolean,
};

const initialState: tInitialState = {
    isDarkMode: getCookie('isDarkMode') ? getCookie('isDarkMode') === 'true' : false,
};

const onChangeSlice = createSlice({
    name: 'onChangeSlice',
    initialState: initialState,
    reducers: {
        setIsDarkMode: (state, _) => {
            state.isDarkMode = !state.isDarkMode;
            setCookie('isDarkMode', state.isDarkMode.toString(), 10000);
        },
    },
})

export const {
    setIsDarkMode,
} = onChangeSlice.actions;
export default onChangeSlice.reducer;
export const onChangeSelector = (state: RootState) => state.onChangeSlice;