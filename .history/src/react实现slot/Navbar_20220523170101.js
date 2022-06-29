import React from 'react'

export default function Navbar(props) {
    const {content} = props.children
    console.log(props);
  return (
    <div>
        <div className="nav-left">content</div>
        <div className="nav-center">content</div>
        <div className="nav-left">content</div>
    </div>
  )
}
