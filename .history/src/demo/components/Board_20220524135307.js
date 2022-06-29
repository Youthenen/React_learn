import React,{use} from 'react'
import Square from  './Square'
export default function Board() {
    const [squares,setSquares] = useState(Array(9).fill(null))
    const status = 'Next player: X';
    function renderSquare(i) {
        return <Square value={i}></Square>
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
