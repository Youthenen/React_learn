import React, { useState } from 'react'
function ProfileHeader(){
  return(
    <div>
      <h2>用户名：coder</h2>
      <h2>年龄：18</h2>
    </div>
  )
}
function Profile({name,age}){
  return (
    <div>
      <ProfileHeader name=></ProfileHeader>
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
  const [name,setName] = useState("hh")
  const [age,setAge] = useState(18) 
  return (
    <div>
      <Profile name="coder" age={18}></Profile>
    </div>
  )
}
