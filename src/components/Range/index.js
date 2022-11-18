import React, { useState } from "react";
import "./range.css";

let dataArray = ["top", "first", "second", "third", "fourth"];

const Range = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="range-outer-container">
      <p className="number-display">{number + 1}</p>
      <div className="range-inner-container">
        <div class="wifi-symbol">
          {dataArray.map((item, index) => {
            return (
              <div
                class={`wifi-circle ${item}`}
                style={{
                  borderColor: number >= 4 - index && "#ffffff",
                }}
                onClick={() => setNumber(4 - index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Range;
