import React, { useState } from 'react'
import Board from './components/Board'
export default function Game() {
    const [history,set]
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
