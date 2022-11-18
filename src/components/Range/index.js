import React, { useState } from "react";
import "./range.css";

let dataArray = ["top", "first", "second", "third", "fourth"];

const Range = () => {
  const [number, setNumber] = useState(0);
  return (
    <div className="range-outer-container">
      <p className="number-display">{number + 1}</p>
      <div className="range-inner-container">
        {dataArray.map((item, index) => {
          return (
            <div
              className={`wifi-circle-custom ${item}`}
              style={{
                borderColor: number >= 4 - index && "#ffffff",
              }}
              onClick={() => setNumber(4 - index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Range;
