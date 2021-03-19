import React from 'react'
import {minutesToDuration, secondsToDuration} from './utils/duration'

// Declare Timer Object
const Timer = ({stateVals}) => {

    const getPercent = (percentFor, percentOf) =>{
        return 100 - Math.floor(percentFor/percentOf*100);
    };

    function focusBreak() {
      if(stateVals.focus) {
        return "Focusing"
      } return "On Break"
    };

    function totalTimeLeft() {
        return (stateVals.focus) ? minutesToDuration(stateVals.focusValDef) : minutesToDuration(stateVals.breakValDef)
    }

    // make functions as consts
    const focusOrBreak = focusBreak();
    const timeLeft = totalTimeLeft();

    // return HTML for Timer
    return (
        <div className={stateVals.timerDisplay ? null : "hidden"}>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">{`${focusOrBreak} for ${timeLeft} minutes`}</h2>
            <p className="lead" data-testid="session-sub-title">
             {secondsToDuration(stateVals.count)} remaining 
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={
                  stateVals.focus
                  ? getPercent(stateVals.count, stateVals.focusValDef * 60, )
                  : getPercent(stateVals.count, stateVals.breakValDef * 60)
                } 
                style={{ width: `${stateVals.focus
                  ? getPercent(stateVals.count, stateVals.focusValDef * 60, )
                  : getPercent(stateVals.count, stateVals.breakValDef * 60)}%`}} 
              />
              </div>
            </div>
          </div>
          </div>
    )
}

export default Timer;