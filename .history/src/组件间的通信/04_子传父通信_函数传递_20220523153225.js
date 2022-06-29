import React, { useState } from 'react';
export default function App(){
    const {count,setCount} = useState(0)
    console.log();
    return(
        <div>
            <h2>当前计数：{count}</h2>
            <button onClick={e=>setCount(count+1)}></button>
        </div>
     )
}