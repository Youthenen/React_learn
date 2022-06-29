import React,{useState} from 'react'


function Example(){
    // setCount是用来改变count的
    // state只在组件首次渲染的时候被创建，下一次重新渲染的时候，
    // useState返回给我们当前的state
    更新 state 变量总是替换它而不是合并它。
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}