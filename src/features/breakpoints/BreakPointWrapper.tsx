import React, {useEffect} from "react";
import {selectBreakPoints} from "./breakpointsSlice";
import {BreakPoint} from "./BreakPoint";
import styles from './BreakPointWrapper.module.css'
import {useAppSelector} from "../../app/hooks";

const BreakPointWrapper = () => {
    const breakPoints: BreakPoint[] = useAppSelector(selectBreakPoints).slice(-10);
    useEffect(() => {
        console.log("styles => ", styles);
    }, []);
    return (!!breakPoints.length ? (
        <div className={styles.breakPoints_wrapper}>
            <div className={styles.breakpoint_state}>
                <div className={styles.title}><span>Latest break points: </span></div>
                {breakPoints.map((breakPoint, index) => {
                    return (
                        <div key={"breakpoint-" + index}
                             className={`${styles.value} ${index === breakPoints.length - 1 ? styles.movingBorder : ""}`}>
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