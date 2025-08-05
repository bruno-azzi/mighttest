import React from "react";

import "./ControlPanel.css";

interface ControlPanelProps {
  maxX: number;
  maxY: number;
  setMaxX: React.Dispatch<React.SetStateAction<number>>;
  setMaxY: React.Dispatch<React.SetStateAction<number>>;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  maxX,
  maxY,
  setMaxX,
  setMaxY,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (value === "") {
      if (id === "maxX") setMaxX(5);
      else if (id === "maxY") setMaxY(5);
      return;
    }

    const numberValue = Number(value);

    if (!isNaN(numberValue) && numberValue >= 1 && numberValue <= 10) {
      if (id === "maxX") setMaxX(numberValue);
      else if (id === "maxY") setMaxY(numberValue);
    }
  };

  return (
    <div className="control-panel">
      <div className="control-group">
        <label htmlFor="maxX">Max X:</label>
        <input
          type="number"
          id="maxX"
          value={maxX}
          min={1}
          max={10}
          onChange={handleChange}
        />
      </div>

      <div className="control-group">
        <label htmlFor="maxY">Max Y:</label>
        <input
          type="number"
          id="maxY"
          value={maxY}
          min={1}
          max={10}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ControlPanel;
