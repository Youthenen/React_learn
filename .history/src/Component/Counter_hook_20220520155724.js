import React,{useState} from 'react'

export default function Counter_hook() {
  const [count,setCount] = useState(0)
  const [friends,setFriends] = useState(['kobe','hh'])
  // let count = 0
  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count+1)}>+1</button>
      <button onClick={() => setCount(count-1)}>-1</button>
      <button></button>
    </div>
  )
}
