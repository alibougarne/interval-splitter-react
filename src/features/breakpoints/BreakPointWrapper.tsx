import React from "react";
import {selectBreakPoints} from "./breakpointsSlice";
import {BreakPoint} from "./BreakPoint";
import './breakpoint.css'
import {useAppSelector} from "../../hooks";

const BreakPointWrapper = () => {
    const breakPoints: BreakPoint[] = useAppSelector(selectBreakPoints).slice(-10);

    return (!!breakPoints.length ? (
        <div className="breakPoints_wrapper">
            <div className="breakpoint-state">
                <div className="title"><span>Latest break points: </span></div>
                {breakPoints.map((breakPoint, index) => {
                    return (
                        <div key={"breakpoint-" + index}
                             className={`value ${index === breakPoints.length - 1 ? "moving-border" : ""}`}>
                            <span>{breakPoint?.startBreakPoint}</span>
                            <span> - </span>
                            <span>{breakPoint?.endBreakPoint}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    ) : (<></>));
}

export default BreakPointWrapper;