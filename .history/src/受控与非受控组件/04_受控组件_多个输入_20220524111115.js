import React, { useState } from 'react'

export default function App() {
    function handleSubmit(event) {
        // 阻止默认提交行为
        event.preventDefault();
        console.log(username);
    }
    // 单向数据流：通过事件监听，监听到变化，然后手动修改数据
    function handleNameChange(event){
        setUserName(event.target.value);
    }
    function handlePwdChange(event){
        setPwd(event.target.value);
    }
    const [username, setUserName] = useState("hh")
    const [pwd, setPwd] = useState("123")


  return (
    <div>
        <div>username:{username}</div>
        <div>pwd:{username}</div>
        <form action="" onSubmit={e=> handleSubmit(e)}>
            {/* for是js关键字 */}
            <label htmlFor="username">
                <input type="text" id="username" name="username" onChange={e=> handleNameChange(e)}/>
            </label>
            <br />
            <label htmlFor="pwd">
                <input type="text" id="pwd" name="pwd" onChange={e=> handlePwdChange(e)}/>
            </label>
            <input type="submit" name="" id="" value="提交" />
        </form>
    </div>
  )
}
