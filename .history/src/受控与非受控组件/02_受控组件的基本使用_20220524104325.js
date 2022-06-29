import React from 'react'

export default function App() {
    function handleSubmit(event) {
        // 阻止默认提交行为
        event.preventDefault();
    }
    const [username, setUserName] = user
  return (
    <div>
        <form action="" onSubmit={e=> hadleSubmit(e)}>
            {/* for是js关键字 */}
            <label htmlFor="username">
                <input type="text" id="username"/>
            </label>
            <input type="submit" name="" id="" value="提交" />
        </form>
    </div>
  )
}
