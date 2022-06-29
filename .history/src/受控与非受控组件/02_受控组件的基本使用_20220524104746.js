import React, { useState } from 'react'

export default function App() {
    function handleSubmit(event) {
        // 阻止默认提交行为
        event.preventDefault();
    }
    function handleChange(event){
        console.log(event.target.value);
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
