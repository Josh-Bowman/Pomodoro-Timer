import React from "react"
import classNames from "./utils/class-names";

const TimerButtons = ({stateVals, setStateVals, initialState}) => {

    function startStop({target}) {
        (target.children[0].className === "oi oi-media-play" && !stateVals.timerDisplay)
        ? setStateVals({...stateVals, running: !stateVals.running, count: stateVals.focusValDef * 60, timerDisplay: true})
        : setStateVals({...stateVals, running: !stateVals.running});
    };

    function fullStop() {
        if(stateVals.timerDisplay) {
            setStateVals({...initialState})
        };
    };

    // return buttond for Timer
    return (
        <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={startStop}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !stateVals.running,
                  "oi-media-pause": stateVals.running,
                })}
              />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              title="Stop the session"
              onClick={fullStop}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
        </div>
    )
}

export default TimerButtons;