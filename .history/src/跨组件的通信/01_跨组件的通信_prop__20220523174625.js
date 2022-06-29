import React, { useState } from 'react'
function ProfileHeader({name,age}){
  return(
    <div>
      <h2>用户名：{name}</h2>
      <h2>年龄：{age}</h2>
    </div>
  )
}
function Profile(props) {
  return (
    <div>
      {/* <ProfileHeader name={name} age={age}></ProfileHeader> */}
      等价于
      <ProfileHeader {...props} />
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
      <Profile name="coderewhy" age={18}></Profile>
    </div>
  )
}
