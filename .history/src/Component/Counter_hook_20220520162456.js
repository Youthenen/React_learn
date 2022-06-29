import React,{useState} from 'react'

export default function Counter_hook() {
  const [count,setCount] = useState(0)
  const [friends,setFriends] = useState([
    {name:'kobe',age:20},
    {name:'hh',age:18}
  ])
  function handleFriendAge(index){
    // 浅拷贝
    const newFriend = [...friends]
    newFriend[index].age+=1
    // 记住在hook里面set永远都是替换
    setFriends(newFriend)
  }
  // let count = 0
  return (
    <div>
      <div>{count}</div>
      <ul>
        {
          friends.map((item,index)=>{
            return (
              <div key={index}>
                <li>名字：{item.name} 年龄：{item.age}</li>
                <button onClick={() =>{handleFriendAge(index)}}>age+1</button>
              </div>
            )
            
          })
        }
      </ul>
      <button onClick={() => setCount(count+1)}>+1</button>
      <button onClick={() => setCount(count-1)}>-1</button>
      <button onClick={() => setCount((prevCount) => {prevCount+1 )}></button>
      <button onClick={() => setFriends([...friends,{name:'nihao',age:20}])}>添加朋友</button>
    </div>
  )
}
