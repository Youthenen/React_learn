import React, { useState } from 'react'

export default function Game() {
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [stepNumber,setStepNumber] = useState(Array())
  return (
    <div>Game</div>
  )
}
