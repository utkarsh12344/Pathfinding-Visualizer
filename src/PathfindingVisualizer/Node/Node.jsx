import React from 'react';
import './Node.css';

const Node = ({ row, col, isStart, isFinish, isWall, mouseIsPressed, onMouseDown, onMouseEnter, onMouseUp }) => {
  const extraClassName = isStart
    ? 'node-start'
    : isFinish
    ? 'node-finish'
    : isWall
    ? 'node-wall'
    : '';

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => mouseIsPressed && onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    ></div>
  );
};

export default Node;
