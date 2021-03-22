import React from 'react';
//import {minutesToDuration} from '../utils/duration'
import {minutesToDuration} from "../utils/duration"

const DurationLocks = ({stateVals, setStateVals}) => {

    //set locks for duration
    const barrier = (dur, min, max) => (dur > max ? max : dur < min ? min : dur);

    const focusingHandler = ({target}) => {
        if (target.id === "minus" && !stateVals.timerDisplay) {
            const newVal = barrier(stateVals.focusValDef - stateVals.focusInc, stateVals.focusMin, stateVals.focusMax)
            setStateVals({...stateVals, focusValDef: newVal})
        }
        if (target.id === "plus" && !stateVals.timerDisplay) {
            const newVal = barrier(stateVals.focusValDef + stateVals.focusInc, stateVals.focusMin, stateVals.focusMax)
            setStateVals({...stateVals, focusValDef: newVal})
        }
    }

    const breakingHandler = ({target}) => {
        if (target.id === "minus" && !stateVals.timerDisplay) {
            const newVal = barrier(stateVals.breakValDef - stateVals.breakInc, stateVals.breakMin, stateVals.breakMax)
            setStateVals({...stateVals, breakValDef: newVal})
        }
        if (target.id === "plus" && !stateVals.timerDisplay) {
            const newVal = barrier(stateVals.breakValDef + stateVals.breakInc, stateVals.breakMin, stateVals.breakMax)
            setStateVals({...stateVals, breakValDef: newVal})
        }
    }

    // return HTML for Duration stuffs
    return (
        // focusing section
        <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(stateVals.focusValDef)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                id="minus"
                onClick={focusingHandler}
              >
                <span className="oi oi-minus" id="minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                id="plus"
                onClick={focusingHandler}
              >
                <span className="oi oi-plus" id="plus" />
              </button>
            </div>
          </div>
        </div>
        
        {  /*breaking section*/  }
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(stateVals.breakValDef)}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  id="minus"
                  onClick={breakingHandler}
                >
                  <span className="oi oi-minus" id="minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  id="plus"
                  onClick={breakingHandler}
                >
                  <span className="oi oi-plus" id="plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default DurationLocks;