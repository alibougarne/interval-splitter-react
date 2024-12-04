import breakpointsSlice, { BreakpointsSliceState, selectBreakPoints, updateBreakPoints} from "./breakpointsSlice";
import {useAppDispatch, useAppSelector, useAppStore} from "../../app/hooks";
import {BreakPoint} from "./BreakPoint";


describe("break points reducer", () => {
    const initialState: BreakPoint = {startBreakPoint: 0, endBreakPoint: 10};
    let dispatch = useAppDispatch();
    let store= useAppStore();
    beforeEach(() => {
        dispatch(updateBreakPoints({...initialState}));
    })
    it('initialize slice with initialValue', () => {

    })

    it("should handle adding break points", () => {
        const dispatch = useAppDispatch();
        // const store= useAppStore();
        expect(useAppSelector(selectBreakPoints)).toBe([]);
        const payload: BreakPoint = {startBreakPoint: 0, endBreakPoint: 3};
        dispatch(updateBreakPoints(payload));
        expect(useAppSelector(selectBreakPoints)).toBe([{startBreakPoint: 0, endBreakPoint: 3}])
    })

})