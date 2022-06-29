import React from 'react'
import Square from  './Square'
export default function Board() {
    function renderSquare(i) {
        return <Square></Square>
    } 
  return (
    <div>
    <div className="status"></div>
    <div className="board-row">
        renderSquare()
    </div>
    <div className="board-row">
   
    </div>
    <div className="board-row">

    </div>
  </div>
  )
}
