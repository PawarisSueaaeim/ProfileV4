import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import onChangeSlice from './feature/darkmode/onChangeSlice'
import onChangeMultiLanguageSlice from './feature/multilanguage/onChangeLanguageSlice';

export const store = configureStore({
    reducer: {
        onChangeSlice,
        onChangeMultiLanguageSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();