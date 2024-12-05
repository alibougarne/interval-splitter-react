import breakPointsReducer, {BreakpointsSliceState, updateBreakPoints} from './breakpointsSlice';

describe("break points reducer", () => {
    const initialState: BreakpointsSliceState = {
        value: [],
    }
    beforeEach(() => {
    })

    it('initialize slice with initialValue', () => {
        expect(breakPointsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    })

    it("should handle adding break points", () => {
        const state1: BreakpointsSliceState = breakPointsReducer(initialState, updateBreakPoints({startBreakPoint: 1, endBreakPoint: 10}));
        expect(state1).toEqual(
            {
                value: [{startBreakPoint: 1, endBreakPoint: 10}],
            }
        );
        // reducer1 is the previous state
        const state2: BreakpointsSliceState = breakPointsReducer(state1, updateBreakPoints({startBreakPoint: 2, endBreakPoint: 7}));
        // reducer2 is the previous state
        const state3: BreakpointsSliceState = breakPointsReducer(state2, updateBreakPoints({startBreakPoint: 23, endBreakPoint: 18}));
        expect(state3.value.length).toEqual(3);

    })

})