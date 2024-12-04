// Use throughout your app instead of plain `useDispatch` and `useSelector`
import {AppDispatch, AppStore, RootState} from "./store";
import { useDispatch, useSelector, useStore} from "react-redux";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore: () => AppStore = useStore;


