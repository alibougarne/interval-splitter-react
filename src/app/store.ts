import {Action, combineSlices, configureStore, ThunkAction} from "@reduxjs/toolkit";
import breakPointsReducer, {breakpointsSlice} from "../features/breakpoints/breakpointsSlice"
import {setupListeners} from "@reduxjs/toolkit/query";

const store =  configureStore({
    reducer: {
        breakPoints: breakPointsReducer
    },
})
export const makeStore = (preloadedState?: Partial<RootState>) => {
    const makeStore = configureStore({
        reducer: combineSlices(breakpointsSlice),
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        middleware: getDefaultMiddleware => {
            return getDefaultMiddleware();
        },
        preloadedState,
    })
    // configure listeners using the provided defaults
    // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
    setupListeners(makeStore.dispatch)
    return makeStore
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>
export default store;