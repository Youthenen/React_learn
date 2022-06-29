import React,{useState} from 'react'


function Example(){
    // 1. setCount是用来改变count的
    // 2. state只在组件首次渲染的时候被创建，下一次重新渲染的时候，
    // useState返回给我们当前的state
    // 3. state也可以存储对象和数组吗，
    // 更新 state 变量总是替换它而不是合并它（class是合并）
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
