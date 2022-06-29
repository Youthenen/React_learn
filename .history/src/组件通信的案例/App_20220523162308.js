import React, { useState } from 'react'
import TabControl from './TabControl'

export default function App() {
  const [currentTitle,setCurrentTitle] = useState("新款")
//   const {currentTitle }= props
  console.log(props);
  return (
    <div>
        <TabControl titles={['新款','流行','普通']}></TabControl>
        <h2>{currentTitle}</h2>
    </div>
  )
}
