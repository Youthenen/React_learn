import React, { useState } from 'react'

export default function Game() {
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [stepNumber,setStepNumber] = useState(0)
    
  return (
    <div>Game</div>
  )
}
