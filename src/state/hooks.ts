import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { store } from "./store";
import { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useThunkDispatch = () => useDispatch<typeof store.dispatch>();
