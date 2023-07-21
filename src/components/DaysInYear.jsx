import { useState } from "react";
import "../assets/style.css"
export default function DaysInYear({ handleTimeRangeChange }) {
  const [numbers, setNumbers] = useState([
    { name: "Day", id: 1, timerange: "1" },
    { name: "Week", id: 2, timerange: "7" },
    { name: "Month", id: 3, timerange: "30" },
    { name: "Year", id: 4, timerange: "365" },
  ]);

  return (
    <div className="year">
      {numbers.map((number) => {
        return (
          <div
            className="range"
            key={number.id}
            onClick={() => {
              handleTimeRangeChange(number.timerange);
            }}
          >
            {number.name}
          </div>
        );
      })}
    </div>
  );
}
