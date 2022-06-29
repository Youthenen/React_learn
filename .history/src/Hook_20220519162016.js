import React,{useEffect, useState} from 'react'

// 学习reat框架
function Example(){
    // 1. setCount是用来改变count的
    // 2. state只在组件首次渲染的时候被创建，下一次重新渲染的时候，
    //    useState返回给我们当前的state
    // 3. state也可以存储对象和数组吗，
    // 更新 state 变量总是替换它而不是合并它（class是合并）
    const [count,setCount] = useState(0)
    // 通过这个hook，你可以告诉react组件需要在喧嚷后执行某些操作
    // （也就是第一次渲染之后and每次更新之后都会执行）
    useEffect(()=>{
        // 修改标题
        document.title = `You clicked ${count} times`
    })
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
