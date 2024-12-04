import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {RootState} from "../../store";

interface BreakPointsCounterProps{
    counter: number
}
const BreakpointsCounter = (props: BreakPointsCounterProps) => {
    const [counter, setCounter] = useState<number>(props.counter);
    useEffect(() => {
        setCounter(props.counter);
    }, [props]);
    return ((!!counter ? (<div className="breakpoints-counter">
        <span className="title">Used break points: </span>
        <span className="counter">{counter}</span>
    </div>) : (<></>))); // return void element if no breakpoints added
}

const mapState = (state: RootState): BreakPointsCounterProps => ({
    counter: state.breakPoints.value.length
})
export default connect(mapState)(BreakpointsCounter);
