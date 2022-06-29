import React from 'react'

export default function Navbar(props) {
    const {children} = props
    console.log(props.children);
    console.log(children[0]);
  return (
    <div className="nav-bar">
        <div className="nav-left">{children[0]}</div>
        <div className="nav-center">{children[0]}</div>
        <div className="nav-right">{children[0]}</div>
    </div>
  )
}
