import React, { useRef } from 'react'

export default function App() {
    采用useRef作为组件实例的变量，
   const titleRef = useRef(null)
   function changeText(){
        // 这样可以获取到dom元素
        console.log(titleRef.current);
   }
  return (
    <div>
        {/* ref = 字符串/对象/函数（挂载dom时回调函数） */}
        <h2 ref={titleRef}>Hello</h2>
        <button onClick={e=>{changeText()}}></button>
    </div>
  )
}
