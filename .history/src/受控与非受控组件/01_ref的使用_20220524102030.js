import React, { useRef } from 'react'

export default function App() {
    const titleRef = useRef()
   function changeText(refs){
        console.log(refs);
   }
  return (
    <div>
        {/* ref = 字符串/对象/函数（挂载dom时回调函数） */}
        <h2 ref="titleRef">Hello</h2>
        <button onClick={e=>{changeText()}}></button>
    </div>
  )
}
