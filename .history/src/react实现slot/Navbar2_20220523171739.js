import React from 'react'

export default function Navbar({leftSlot,centerSlot,rightSlot}) {
    const {leftSlot,centerSlot,rightSlot} = props
  return (
    <div className="nav-bar">
        <div className="nav-left">{leftSlot}</div>
        <div className="nav-center">{centerSlot}</div>
        <div className="nav-right">{rightSlot}</div>
    </div>
  )
}
