import React, { useState } from 'react'
import Bo
export default function Game() {
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [stepNumber,setStepNumber] = useState(0)
    const [xIsNext,setXIsNext] = useState(true)

    return (
        <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
  )
}
