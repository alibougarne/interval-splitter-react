import React from "react";
import "./App.css";
import SplitInterval from "./features/splitInterval/SplitInterval";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
    return (
        <div className="app_wrapper">
            <SpeedInsights/>
            <SplitInterval/>
        </div>
    );
}
export default App;
