import React, { useState } from 'react';

function CounterButton(props) {
    const {increase} = this.props;
    return(
        <button>+1</button>
    )
}
export default function App(){
    const [count,setCount] = useState(0)
    increase() {
        setCount(count+1)
    }
    return(
        <div>
            <h2>当前计数：{count}</h2>
            <button onClick={e=>setCount(count+1)}>点击+1</button>
            <CounterButton btnClick={increase}/> 
        </div>
     )
}