import React, { useState } from 'react'
import Board from './components/Board'
export default function Game() {
    const [history,setHistory] = useState([{squares:Array(9).fill(null)}])
    const [xIsNext,setXIsNext] = useState(true)
    const current = history[history.length-1]
    return (
        <div className="game">
        <div className="game-board">
          <Board  squares={current.squares}
          onClick = {i => handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
  )
  function handleClick(i){
    const 
    const newSquares = squares.slice()
    // 如果已经有赢家了，或者是这个格子已经有人走过了
    if(calculateWinner(squares) || squares[i]){
        return
    }
    newSquares[i] = xIsNext ? 'X' :'O'
    // setSquares(newSquares)
    setXIsNext(!xIsNext)
    // console.log(squares);
}
}
