import React from "react";

import { Position, Direction } from "../../page";

import "./StatusPanel.css";

interface StatusPanelProps {
  position: Position;
  direction: Direction;
}

const StatusPanel: React.FC<StatusPanelProps> = ({ position, direction }) => {
  const getDirectionArrow = (dir: Direction): string => {
    switch (dir) {
      case "N":
        return "↑";
      case "E":
        return "→";
      case "S":
        return "↓";
      case "W":
        return "←";
    }
  };

  return (
    <div className="status-panel">
      <div className="status">
        Position: ({position.x}, {position.y}) — Direction:{" "}
        {getDirectionArrow(direction)}
      </div>
      
      <div className="key-info">
        Use the keyboard keys: <br />
        <br />
        <kbd>L</kbd> (turn left), <kbd>R</kbd> (turn right), <kbd>M</kbd> (move
        forward)
      </div>
    </div>
  );
};

export default StatusPanel;
