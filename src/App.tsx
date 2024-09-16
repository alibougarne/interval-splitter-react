import React from 'react';
import './App.css';

interface Interval {
  start: number,
  end: number
}

function App() {
  const [periods, setPeriods] = React.useState<Interval[]>([{
    start: 0,
    end: 100
  }])

  const split = (event: React.SyntheticEvent<HTMLFormElement>) : void => {
  	// put your split logic here
  }

  return ( 
    <div className = 'interval-split' >
      <form onSubmit = {split} >
      	<label>Start: <input type="number" /></label>
      	<label>End: <input type="number" /></label>
      	<button>Split</button> 
      </form>
      {/* Put the result of the split here */}
    </div>
  )
}

export default App;


