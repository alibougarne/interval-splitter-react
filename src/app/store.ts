import {Action, combineReducers, combineSlices, configureStore, ThunkAction} from "@reduxjs/toolkit";
import breakpointsSlice from "../features/breakpoints/breakpointsSlice"


const rootReducer = combineReducers({
    breakPoints: breakpointsSlice
})
const store =  (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']

// Infer the `RootState` and `AppDispatch` types from the store itself
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>
export default store;