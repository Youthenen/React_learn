import React, { useState } from 'react'
import Board from './components/Board'
export default function Game() {
    const [history,setHistory] = useState([{squares:Array(9).fill(null)}])
    const [xIsNext,setXIsNext] = useState(true)
    // 当前我们正在查看的历史步骤
    const [stepNumber,setStepNumber] = useState(0)
    const current = <history step=""></history>
    // 判断当前是否有赢家
    let status
    const winner = calculateWinner(current.squares)
    if(winner){
      status = 'Winner: '+winner
      console.log(1);
    }
    else{
      status = 'Next player: ' + (xIsNext ? 'X' : 'O')
    }

    const moves = history.map((step,move)=>{
      const desc = move ? 
      'Go to move #' + move :
      'Go to game start'
      return(
        <li  key={move}>
          <button onClick={()=>jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    return (
        <div className="game">
        <div className="game-board">
          <Board  squares={current.squares}
          BoardClick = {i => handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
  )

  // 计算赢家
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  function handleClick(i){
    // 根据当前的步骤取出对应的历史记录，以后此时后面的历史记录对于这一轮就已经无效了
    const newHistory = history.slice(0,stepNumber+1)
    // 展示当前
    const current = newHistory[newHistory.length-1]
    const squares = current.squares.slice()
    const newSquares = squares.slice()
    console.log(squares);
    // 如果已经有赢家了，或者是这个格子已经有人走过了
    if(calculateWinner(squares) || squares[i]){
        return
    }
    newSquares[i] = xIsNext ? 'X' :'O'
    setHistory(history.concat([{squares:newSquares}]))
    setXIsNext(!xIsNext)
    setStepNumber(history.length)
    console.log(squares);

  }
  function jumpTo(step){
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }
  
}
