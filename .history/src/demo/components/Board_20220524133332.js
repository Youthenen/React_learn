import React from 'react'

export default function Board() {
  return (
    <div>
    <div className="status"></div>
    <div className="board-row">

    </div>
    <div className="board-row">
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
    </div>
    <div className="board-row">
      {this.renderSquare(6)}
      {this.renderSquare(7)}
      {this.renderSquare(8)}
    </div>
  </div>
  )
}
