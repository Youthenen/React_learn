import React from 'react'

export default function Counter_hook() {
  const [count,setCount] = useState(0)
  // let count = 0
  return (
    <div>
      <div>{count}</div>
      <button onClick={setCount()}>+1</button>
      <button>-1</button>
    </div>
  )
}
