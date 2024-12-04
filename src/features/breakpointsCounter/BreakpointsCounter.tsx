import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {RootState} from "../../app/store";
import styles from './BreakpointsCounter.module.css'

interface BreakPointsCounterProps{
    counter: number
}
const BreakpointsCounter = (props: BreakPointsCounterProps) => {
    const [counter, setCounter] = useState<number>(props.counter);
    useEffect(() => {
        setCounter(props.counter);
    }, [props]);
    return ((!!counter ? (<div className={styles.breakpoints_counter}>
        <span className={styles.title}>Used break points: </span>
        <span className={styles.counter}>{counter}</span>
    </div>) : (<></>))); // return void element if no breakpoints added
}

const mapState = (state: RootState): BreakPointsCounterProps => ({
    counter: state.breakPoints.value.length
})
export default connect(mapState)(BreakpointsCounter);
