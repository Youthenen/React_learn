import React,{useState} from 'react'

export default function Counter_hook() {
  const [count,setCount] = useState(0)
  const [friends,setFriends] = useState([
    {name:'kobe',age:20},
    {name:'hh',age:18}
  ])
  // let count = 0
  return (
    <div>
      <div>{count}</div>
      <ul>
        {
          friends.map((item,index)=>{
            return (
              <div>
                <li key={index}>{item.name}  {item.age}</li>
                <button onClick={() =>{setFriends(friends.indexOf)}}>age+1</button>
              </div>
            )
            
          })
        }
      </ul>
      <button onClick={() => setCount(count+1)}>+1</button>
      <button onClick={() => setCount(count-1)}>-1</button>
      <button onClick={() => setFriends([...friends,'nihao'])}>添加朋友</button>
    </div>
  )
}
