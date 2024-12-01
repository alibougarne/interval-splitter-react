import React, {useEffect} from "react";
import "./App.css";
import {
    BreakPoint,
    Interval,
    splitUsingSlice,
    Validation,
} from "./arrayTools";
import logo from "./assets/logo.png";
import {regroupEmptyPeriods} from "./domManipulations";

function App() {
    const defaultBreakPoint = {
        startBreakPoint: undefined,
        endBreakPoint: undefined,
    };
    const [periods, setPeriods] = React.useState<Interval[]>([
        {
            start: 0,
            end: 100,
        },
    ]);
    const [breakPoint, setBreakPoint] =
        React.useState<BreakPoint>(defaultBreakPoint);
    const [validationRules, setValidationRules] = React.useState<Validation>();

    useEffect(() => {
        validate(breakPoint);
    }, [breakPoint]);

    useEffect(() => {
        const equalRanges = periods.filter((p: Interval) => p.end === p.start);
        !!equalRanges.length && regroupEmptyPeriods(equalRanges, 'equal_ranges_collector');
    }, [periods]);


    const validate = ({startBreakPoint, endBreakPoint}: BreakPoint): void => {
        if (startBreakPoint !== undefined && endBreakPoint !== undefined) {
            if (startBreakPoint >= endBreakPoint) {
                setValidationRules({
                    validationMessage: "⚠️ start must be strictly lower than end",
                    className: "alert",
                    disabledButton: true,
                });
            }
            if (startBreakPoint < endBreakPoint) {
                setValidationRules({
                    validationMessage: "",
                    className: "",
                    disabledButton: false,
                });
            }
            if (startBreakPoint < 0 || endBreakPoint < 0) {
                setValidationRules({
                    validationMessage: "⚠️ values must be positive",
                    className: "alert",
                    disabledButton: true,
                });
            }
        } else {
            setValidationRules({
                validationMessage: "enter values please 👀",
                className: "info",
                disabledButton: true,
            });
        }
    };
    const split = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        // put your split logic here
        event.preventDefault();
        const {startBreakPoint, endBreakPoint} = breakPoint;
        const arr = splitUsingSlice(periods, {startBreakPoint, endBreakPoint});
        setPeriods(arr);
        setBreakPoint(defaultBreakPoint);
        (event.target as any).reset();
    };

    return (
        <div className="interval-split">
            <h1 className="logo">
                <img src={logo} alt="logo"/>
                <span>split interval tool</span>
            </h1>
            <form onSubmit={split} className="interval-split__form">
                <div>
                    <label>
                        <span>Start: </span>
                        <input
                            type="number"
                            placeholder="enter a number..."
                            onChange={(event) =>
                                setBreakPoint({
                                    ...breakPoint,
                                    startBreakPoint: Number(event.target.value),
                                })
                            }
                            onBlur={(event) =>
                                setBreakPoint({
                                    ...breakPoint,
                                    startBreakPoint: Number(event.target.value),
                                })
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span>End: </span>
                        <input
                            type="number"
                            placeholder="enter a number..."
                            onChange={(event) =>
                                setBreakPoint({
                                    ...breakPoint,
                                    endBreakPoint: Number(event.target.value),
                                })
                            }
                            onBlur={(event) =>
                                setBreakPoint({
                                    ...breakPoint,
                                    endBreakPoint: Number(event.target.value),
                                })
                            }
                        />
                    </label>
                </div>
                {validationRules?.validationMessage && (
                    <div className={validationRules?.className + " validation-message"}>
                        <p>{validationRules.validationMessage}</p>
                    </div>
                )}
                <div>
                    <button
                        disabled={validationRules?.disabledButton}
                        className={validationRules?.disabledButton ? "disabled" : "active"}
                    >
                        Split
                    </button>
                </div>
            </form>
            <div className={`interval-split__ranges ${periods.filter(p => p.start === p.end).length > 1 ? "containsEqualRanges":""}`} >
                <div className="equal_ranges_collector" style={{display: "none"}}>
                    <button className="join_botton">Magic ranges</button>
                </div>
                {periods.map((p: Interval, index: number) => {
                    return (
                        <div
                            key={`range-${index}`}
                            style={{
                                width: (p.end - p.start) * 10,
                            }}
                            className={p.start === p.end ? "equal_range range range-" + p.start + "_" + p.end : "range"}
                        >
                            <div className="loading"></div>
                            <span>{p.start} - </span>
                            <span>{p.end}</span>
                        </div>
                    );
                })}
            </div>
            <div className={"footer"}>
                <p> &copy;Eurocontrol test project </p>
                <p>
                    {" "}
                    @author:{" "}
                    <a
                        href="https://alibougarne.github.io/#/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Ali BOUGARNE
                    </a>
                </p>
            </div>
        </div>
    );
}

export default App;
