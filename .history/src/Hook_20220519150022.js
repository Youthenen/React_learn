import React,{useState} from 'react'
function Example(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>You clicked {count} times</p>
            <button></button>
        </div>
    )
}