import React, { useState } from 'react'
import TabControl from './TabControl'

export default function App() {
  const [currentTitle,setCurrentTitle] = useState("新款")

  function tabClick(index){
    //   console.log(titles);
    //   setCurrentTitle()
    console.log(index);
  }
  return (
    <div>
        <TabControl tabClick={index=>itemClick(index)} titles={['新款','流行','普通']}></TabControl>
        <h2>{currentTitle}</h2>
    </div>
  )
}
