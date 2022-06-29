import React, { useState } from 'react'

export default function App() {
    function handleSubmit(event) {
        // 阻止默认提交行为
        event.preventDefault();
        console.log(username);
    }
    // 单向数据流：通过事件监听，监听到变化，然后手动修改数据
    function handleChange(event){
        setUserName(event.target.value);
    }
    const [username, setUserName] = useState("hh")

  return (
    <div>
        <div>username:{username}</div>
        <form action="" onSubmit={e=> handleSubmit(e)}>
            {/* for是js关键字 */}
            <label htmlFor="username">
                <input type="text" id="username" onChange={e=> handleChange(e)}/>
            </label>
            <input type="submit" name="" id="" value="提交" />
        </form>
    </div>
  )
}
