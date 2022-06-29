import React, { useState } from 'react'

export default function Square({value}) {
    // 我们需要在这里更新父组件board的state，但由于父组件的state是私有的，所以只能通过在fu zu jian
    const [isClick,setIsClick] = useState(null)
  return (
    <button className="square" onClick={()=>setIsClick('X')}>
        {isClick}
    </button>
  )
}
