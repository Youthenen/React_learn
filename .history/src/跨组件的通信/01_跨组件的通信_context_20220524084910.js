import React, { useState } from 'react'
const UserContext = React.createContext({
  name:'aaa',
  age:1
})
UserContext.Con
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
  const name = "hh"
  return (
    <div>
      <UserContext.Provider value={name}>
        <Profile></Profile>
      </UserContext.Provider>
      
    </div>
  )
}
