import React, { useState } from 'react'
import TabControl from './TabControl'

export default function App() {
  const [currentTitle,setCurrentTitle] = useState("新款")
  const [t]
  function tabClick(index){
    const title = []
    console.log(index);
  }
  return (
    <div>
        {/* 父组件通过属性传递一个函数给子组件，
        然后通过在子组件中调用这个函数，在子组件中把index传给父组件 */}
        <TabControl tabsClick={index=>tabClick(index)} titles={['新款','流行','普通']}></TabControl>
        <h2>{currentTitle}</h2>
    </div>
  )
}
