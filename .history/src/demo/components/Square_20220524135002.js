import React, { useState } from 'react'

export default function Square({value}) {
    const [isClick,setIsClick] = useState(null)
  return (
    <button className="square" onClick={()=>set}>
        {value}
    </button>
  )
}
