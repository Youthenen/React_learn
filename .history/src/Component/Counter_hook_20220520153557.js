import React from 'react'

export default function Counter_hook() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <div>{}</div>
      <button>+1</button>
      <button>-1</button>
    </div>
  )
}
