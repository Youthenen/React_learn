import React from 'react'

export default function App() {
   function changeText(){

   }
  return (
    <div>
        {/* ref = 字符串/对象/函数（挂载dom时回调函数） */}
        <h2 ref="titleRef">Hello</h2>
        <button onClick={e=>{changeText()}}></button>
    </div>
  )
}
