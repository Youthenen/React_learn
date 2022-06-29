import React from 'react'

export default function Navbar(props) {
    const {children} = props
    console.log(children);
  return (
    <div className="nav-bar">
        <div className="nav-left">{children[0]}</div>
        <div className="nav-center"></div>
        <div className="nav-right"></div>
    </div>
  )
}
