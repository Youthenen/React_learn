import React from 'react'

export default function Navbar(props) {
    const {leftSlot,centerSlot,rightSlot} = props
  return (
    <div className="nav-bar">
        <div className="nav-left">{leftSlot}</div>
        <div className="nav-center">{}</div>
        <div className="nav-right"></div>
    </div>
  )
}
