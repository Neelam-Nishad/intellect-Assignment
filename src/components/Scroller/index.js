import React, { useState } from "react";
import "./scroller.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Scroller = () => {
  const [currentProgress, setCurrentProgress] = useState(0);
  return (
    <div className="scroller-contianer">
      <div className="scroller-inner-contianer">
        <div className="scroller-first-circle">
          <div className="scroller-circle">
            <CircularProgressbar
              value={currentProgress}
              text={`${currentProgress / 10}`}
              strokeWidth={5}
            />
          </div>
        </div>
        <div className="scroller-flat-bar-container">
          <input
            className="seekbar"
            type="range"
            id="points"
            name="points"
            min="0"
            max="100"
            value={currentProgress}
            onChange={e => setCurrentProgress(e.target.value)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
