import React,{useState} from 'react'
import Square from  './Square'
export default function Board() {
    // 设置一个空的数组，用于存放每个square的状态，将所有子组件的状态统一放在父组件管理类
    const [squares,setSquares] = useState(Array(9).fill(null))
    const status = 'Next player: X';
    function renderSquare(i) {
        // 传递给每个格子当前square的状态
        return <Square value={squares[i]} onClick={()=>handleClick(i)}></Square>
    } 
    function handleClick(i){
        const newSquares = squares.slice()
        newsquares[i] = 'X'
        setSquares(squares)
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
}
