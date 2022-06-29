import React, { useState } from 'react'
import TabControl from './TabControl'

export default function App(prop) {
  const [currentTitle,setCurrentTitle] = useState("新款")
  return (
    <div>
        <TabControl titles={['新款','流行','普通']}></TabControl>
        <h2></h2>
    </div>
  )
}
