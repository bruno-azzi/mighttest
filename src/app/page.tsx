"use client";

import React, { useEffect, useState } from "react";

import ControlPanel from "./components/ControlPanel/ControlPanel";
import StatusPanel from "./components/StatusPanel/StatusPanel";
import Grid from "./components/Grid/Grid";

import "./App.css";
import Link from "next/link";

export type Direction = "N" | "E" | "S" | "W";

export interface Position {
  x: number;
  y: number;
}

const directions: Direction[] = ["N", "E", "S", "W"];

const Page: React.FC = () => {
  const [maxX, setMaxX] = useState(5);
  const [maxY, setMaxY] = useState(5);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [direction, setDirection] = useState<Direction>("N");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();

      if (key === "L") turnLeft();
      else if (key === "R") turnRight();
      else if (key === "M") moveForward();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [position, direction]);

  const turnLeft = () => {
    const index = directions.indexOf(direction);
    setDirection(directions[(index + 3) % 4]);
  };

  const turnRight = () => {
    const index = directions.indexOf(direction);
    setDirection(directions[(index + 1) % 4]);
  };

  const moveForward = () => {
    setPosition((prev) => {
      const { x, y } = prev;
      switch (direction) {
        case "N":
          return y < maxY ? { x, y: y + 1 } : prev;
        case "E":
          return x < maxX ? { x: x + 1, y } : prev;
        case "S":
          return y > 0 ? { x, y: y - 1 } : prev;
        case "W":
          return x > 0 ? { x: x - 1, y } : prev;
        default:
          return prev;
      }
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mars Rover Simulator</h1>
      </header>

      <ControlPanel
        maxX={maxX}
        maxY={maxY}
        setMaxX={setMaxX}
        setMaxY={setMaxY}
      />

      <StatusPanel position={position} direction={direction} />

      <Grid maxX={maxX} maxY={maxY} position={position} direction={direction} />

      <footer>
        <Link href="https://github.com/bruno-azzi/mighttest" target="_blank">Github</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link href="https://www.linkedin.com/in/brunoazzi/" target="_blank">Linkedin</Link>
      </footer>
    </div>
  );
};

export default Page;
