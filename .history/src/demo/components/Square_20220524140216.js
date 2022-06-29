import React, { useState } from 'react'

export default function Square({value,onClick}) {
    // 我们需要在这里更新父组件board的state，但由于父组件的state是私有的，所以只能通过在父组件传递一个函数来实现
    const [isClick,setIsClick] = useState(null)
  return (
    <button className="square" onClick={on}>
        {isClick}
    </button>
  )
}
