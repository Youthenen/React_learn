import React from 'react'
import Navbar from './Navbar'
import Navbar2 from './Navbar2'
export default function App() {
  return (
    <div>
        <Navbar>
            <div>hhh</div>
            <div>hhh</div>
            <div>hhh</div>
        </Navbar>
        <Navbar2 leftSlot={<div>hhh</div>}
                leftSlot={<div>hhh</div>}
                leftSlot={<div>hhh</div>}
        
        ></Navbar2>
    </div>
  )
}
