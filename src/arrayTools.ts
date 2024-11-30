export function splitUsingSlice(
  interval: Interval[],
  { startBreakPoint, endBreakPoint }: BreakPoint
): Interval[] {
  let result: number[][] = [];
  result = mapToArray(interval);
  const slicedArray = checkAndSlice(result, { startBreakPoint, endBreakPoint });
  return mapToInterval(slicedArray);
}

function checkAndSlice(
  array: number[][],
  { startBreakPoint, endBreakPoint }: BreakPoint
): number[][] {
  let result: number[][] = [];
  let mergedArray: number[] = [];
  let breakPointArray = mapToArray([
    { start: startBreakPoint!, end: endBreakPoint! },
  ])[0];
  array.forEach((arr) => {
    if (
      arr.includes(startBreakPoint!) ||
      arr.includes(endBreakPoint!) ||
      breakPointArray.includes(arr[0]) ||
      breakPointArray.includes(arr[arr.length])
    ) {
      mergedArray = [...mergedArray, ...arr];
    } else if (arr.length) {
      result.push(arr);
    }
  });
  const slicedMergedArray = sliceArrayWithBreakPoints(mergedArray, {
    startBreakPoint,
    endBreakPoint,
  });
  result = [...result, ...slicedMergedArray];
  return result.filter((arr) => arr.length > 0);
}

function sliceArrayWithBreakPoints(
  array: number[],
  { startBreakPoint, endBreakPoint }: BreakPoint
): number[][] {
  const start = array.slice(0, array.indexOf(startBreakPoint!));
  const middle = array.slice(
    array.indexOf(startBreakPoint!),
    array.indexOf(endBreakPoint!) + 1
  );
  const end = array.slice(array.indexOf(endBreakPoint!) + 1);
  return [start, middle, end];
}

export function mapToArray(interval: Interval[]): number[][] {
  let result: number[][] = [];
  interval.forEach((o) => {
    let arr = [];
    for (let i = o.start; i <= o.end; i++) {
      arr.push(i);
    }
    result.push(arr);
  });
  return result;
}

export function mapToInterval(result: number[][]): Interval[] {
  const mapToObject = result.map((a) => ({
    start: a[0],
    end: a.splice(-1)[0],
  }));
  return mapToObject;
}

export interface Interval {
  start: number;
  end: number;
}

export interface BreakPoint {
  startBreakPoint: number | undefined;
  endBreakPoint: number | undefined;
}

export interface Validation {
  validationMessage: string;
  className: string;
  disabledButton: boolean;
}
