import React,{useState} from 'react'


function Example(){
    // setCount是用来改变count的
    // state只在组件首次渲染的时候被创建，下一次重新渲染的时候，useTS
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}