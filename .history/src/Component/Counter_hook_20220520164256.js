import React,{useEffect, useState} from 'react'

export default function Counter_hook() {
  const [count,setCount] = useState(0)
  // 等价于(初始化的时候也可以传入一个函数)
  // const [count,setCount] = useState(()=> 0)
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
  // 组件渲染完之后就会执行，相当于合并了挂载后第一次渲染和更新之后 两个生命周期
  useEffect(()=>{
    document.title = count
  })

  useEffect(()=>{
    console.log("挂载之后订阅事件")
    return ()=>{
      console.log("更新之后");
    }
  })
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
      {/* setCount改变的时候也可以传入一个函数，这个函数可以获取当前的值，然后做修改 */}
      {/* 多个setCount(count+10)会被合并，点击一次只加10，但是setCount传函数不会 */}
      <button onClick={() => setCount((prevCount) => { return prevCount+1} )}>count+1</button>
      <button onClick={() => setFriends([...friends,{name:'nihao',age:20}])}>添加朋友</button>
    </div>
  )
}
