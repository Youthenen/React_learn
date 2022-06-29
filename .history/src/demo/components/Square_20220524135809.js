import React, { useState } from 'react'

export default function Square({value}) {
    // 我们需要在这里更新父组件board的state，dan y
    const [isClick,setIsClick] = useState(null)
  return (
    <button className="square" onClick={()=>setIsClick('X')}>
        {isClick}
    </button>
  )
}
