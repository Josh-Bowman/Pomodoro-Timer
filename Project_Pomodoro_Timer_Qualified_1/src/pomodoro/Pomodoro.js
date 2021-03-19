import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import DurationLocks from "../DurationLocks"
import Timer from "../Timer"
import TimerButtons from "../TimerButtons"

function Pomodoro() {
  //set InitialState as an object with properties
  const initialState = {
    timerDisplay: false,
    focusValDef: 25,
    focusInc: 5,
    focusMin: 5,
    focusMax: 60,
    count: 1, 
    breakValDef: 5,
    breakInc: 1,
    breakMin: 1,
    breakMax: 15,
    running: false,
    focus: true
  }
  // set STATE for InitialState Object
  const [stateVals, setStateVals] = useState({...initialState})
  // Timer starts out paused
  // const [isTimerRunning, setIsTimerRunning] = useState(false);

  useInterval(() => {
      // ToDo: Implement what should happen when the timer is running
      if(stateVals.running) {
        setStateVals({...stateVals, count: stateVals.count -1})
      }
      if (stateVals.count === 0 && stateVals.focus) {
        setStateVals({...stateVals, count: stateVals.breakValDef * 60, focus: !stateVals.focus})
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      }
      if (stateVals.count === 0 && !stateVals.focus) {
        setStateVals({...stateVals, count: stateVals.focusValDef * 60, focus: !stateVals.focus})
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      }
    }, stateVals.running ? 1000 : null
  );

  // function playPause() {
  //   setIsTimerRunning((prevState) => !prevState);
  // }

  return (
    <div className="pomodoro">
      <DurationLocks stateVals={stateVals} setStateVals={setStateVals}/>
      <TimerButtons stateVals={stateVals} setStateVals={setStateVals} initialState={initialState} />
      <Timer stateVals={stateVals} />
    </div>
  );
}

export default Pomodoro;
