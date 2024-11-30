import { Interval, BreakPoint, splitUsingSlice } from "./arrayTools";

it("split an interval using break points", () => {
  const interval: Interval[] = [
    {
      start: 0,
      end: 100,
    },
  ];
  const interval2 = [
    { start: 0, end: 19 },
    { start: 20, end: 30 },
    { start: 31, end: 100 },
  ];
  const interval3 = [
    { start: 0, end: 19 },
    { start: 20, end: 24 },
    { start: 25, end: 50 },
    { start: 51, end: 100 },
  ];
  const breakPoints: BreakPoint = { startBreakPoint: 20, endBreakPoint: 30 };
  const breakPoints2: BreakPoint = { startBreakPoint: 25, endBreakPoint: 50 };
  const breakPoints3: BreakPoint = { startBreakPoint: 0, endBreakPoint: 100 };
  expect(splitUsingSlice(interval, breakPoints)).toEqual(interval2);
  expect(splitUsingSlice(interval2, breakPoints2)).toEqual(interval3);
  expect(splitUsingSlice(interval3, breakPoints3)).toEqual(interval);
  expect(splitUsingSlice(interval3, breakPoints3)).not.toEqual(interval2);
});
