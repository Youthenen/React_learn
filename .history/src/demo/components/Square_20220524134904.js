import React from 'react'

export default function Square({value}) {
    const [isClick,setIsClick]
  return (
    <button className="square" onClick={()=>console.log("click")}>
        {value}
    </button>
  )
}
