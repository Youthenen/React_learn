import React, { useState } from 'react';
export default function App(){
    const {count,setCount} = useState(0)
    return(
        <div>
            <h2>当前计数：{count}</h2>
            <button onClick={e=>setCount(e.target.)}></button>
        </div>
     )
}