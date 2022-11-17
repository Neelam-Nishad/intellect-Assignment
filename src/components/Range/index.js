import React, { useState } from "react";
import "./range.css";

const Range = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="range-outer-container">
      <p className="number-display">{number + 1}</p>
      <div className="range-inner-container">
        <div class="wifi-symbol">
          <div
            class="wifi-circle top"
            style={{ borderColor: number >= 4 && "#ffffff" }}
            onClick={() => setNumber(4)}
          />
          <div
            class="wifi-circle first"
            style={{ borderColor: number >= 3 && "#ffffff" }}
            onClick={() => setNumber(3)}
          />
          <div
            class="wifi-circle second"
            style={{ borderColor: number >= 2 && "#ffffff" }}
            onClick={() => setNumber(2)}
          />
          <div
            class="wifi-circle third"
            style={{ borderColor: number >= 1 && "#ffffff" }}
            onClick={() => setNumber(1)}
          />
          <div
            class="wifi-circle fourth"
            style={{ borderColor: number >= 0 && "#ffffff" }}
            onClick={() => setNumber(0)}
          />
        </div>
      </div>
    </div>
  );
};

export default Range;
