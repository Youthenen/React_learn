import React from 'react'

export default function Counter_hook() {
  // const [count,setCount] = useState(0)
  let count
  return (
    <div>
      <div>{count}</div>
      <button onClick={()=>{count+1}}>+1</button>
      <button>-1</button>
    </div>
  )
}
