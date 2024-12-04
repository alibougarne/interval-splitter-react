import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {BreakPoint} from "./BreakPoint";
import {RootState} from "../../app/store";


export interface BreakpointsSliceState {
    value: BreakPoint[]
}
// Define the initial state using that type
const initialState: BreakpointsSliceState = {
    value: [],
}

export const breakpointsSlice = createSlice({
    name: 'breakpoints',
    initialState,
    reducers: {
        updateBreakPoints : (state, action: PayloadAction<BreakPoint>) => {
            state.value.push(action.payload);
        }
    }
});

export const selectBreakPoints = (state: RootState) => state.breakPoints.value;
export const {updateBreakPoints} = breakpointsSlice.actions;
export default breakpointsSlice.reducer;