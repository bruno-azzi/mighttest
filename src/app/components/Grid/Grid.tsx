import React from "react";

import RoverIcon from "../RoverIcon/RoverIcon";
import { Position, Direction } from "../../page";

import './Grid.css'

interface GridProps {
  maxX: number;
  maxY: number;
  position: Position;
  direction: Direction;
}

const Grid: React.FC<GridProps> = ({ maxX, maxY, position, direction }) => {
  const rows = [];

  for (let y = maxY; y >= 0; y--) {
    const cells = [];

    for (let x = 0; x <= maxX; x++) {
      const isRoverHere = position.x === x && position.y === y;

      cells.push(
        <div
          key={`${x}-${y}`}
          className="cell"
          aria-label={
            isRoverHere ? `Rover at (${x},${y}) facing ${direction}` : undefined
          }
        >
          {isRoverHere && (
            <span className={`rover-icon facing-${direction}`}>
              <RoverIcon />
            </span>
          )}
        </div>
      );
    }

    rows.push(cells);
  }

  return (
    <div className="grid-wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${maxX + 1}, 80px)`,
          gridTemplateRows: `repeat(${maxY + 1}, 80px)`,
        }}
      >
        {rows.flat()}
      </div>
    </div>
  );
};

export default Grid;
