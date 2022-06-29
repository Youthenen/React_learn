import React, { useState } from 'react'

export default function Square({value}) {
    我们需要在这里更新副组件board的date
    const [isClick,setIsClick] = useState(null)
  return (
    <button className="square" onClick={()=>setIsClick('X')}>
        {isClick}
    </button>
  )
}
