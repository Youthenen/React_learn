import React, { useState } from 'react'
function ProfileHeader(){
  return(
    <div>
      <h2>用户名：</h2>
      <h2>年龄：</h2>
    </div>
  )
}
function Profile(props) {
  return (
    <div>
      <ProfileHeader/>
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
