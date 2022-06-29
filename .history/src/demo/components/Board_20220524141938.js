import React,{useState} from 'react'
import Square from  './Square'
export default function Board() {
    // 设置一个空的数组，用于存放每个square的状态，将所有子组件的状态统一放在父组件管理类
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [xIsNext,setXIsNext] = useState(true)
    const status = 'Next player: X';
    function renderSquare(i) {
        // 传递给每个格子当前square的状态
        return <Square value={squares[i]} onClick={()=>handleClick(i)}></Square>
    } 
    function handleClick(i){
        const newSquares = squares.slice()
        newSquares[i] = xIsNext ? 'X' :'O'
        setSquares(newSquares)
        setXIsNext(!xIsNext)
        console.log(squares);
    }
  return (
    <div>
    <div className="status">{status}</div>
    <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
    </div>
    <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
    </div>
    <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
    </div>
  </div>
  )
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
}
