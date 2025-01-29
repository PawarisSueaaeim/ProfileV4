import { RootState } from "@/lib/store";
import { setCookie } from "@/utils/function/cookie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    language: 'en',
};

export const onChangeMultiLanguageSlice = createSlice({
    name: "onChangeMultiLanguageSlice",
    initialState: initialState,
    reducers: {
        setLocale: (state, action) => {
            const { value } = action.payload;
            state.language = value
            setCookie("i18next", state.language, 900000);
        },    
    }
})

export const {
    setLocale,
} = onChangeMultiLanguageSlice.actions;
export default onChangeMultiLanguageSlice.reducer;
export const onChangeMultiLanguageSelector = (state: RootState) => state.onChangeMultiLanguageSlice;