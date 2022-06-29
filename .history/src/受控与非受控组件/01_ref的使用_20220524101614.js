import React from 'react'

export default function App() {
  return (
    <div>
        {/* ref = 字符串/对象/函数（挂载dom时回调函数） */}
        <h2 ref="title">Hello</h2>
    </div>
  )
}
