import React from 'react'
function ProfileHeader(){
  return(
    <div>
      <h2>用户名：coder</h2>
      <h2>年龄：18</h2>
    </div>
  )
}
function Profile(){
  return (
    <div>
      <ul>
        <li>shezhi 1</li>
        <li>shezhi 1</li>
        <li>shezhi 1</li>
        <li>shezhi 1</li>
      </ul>
    </div>
  )
}
export default function App() {
  return (
    <div>
      Pro
      <Profile />
    </div>
  )
}
