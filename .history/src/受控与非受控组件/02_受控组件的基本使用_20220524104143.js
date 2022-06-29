import React from 'react'

export default function App() {
  return (
    <div>
        <form action="" onSubmit={e}>
            {/* for是js关键字 */}
            <label htmlFor="username">
                <input type="text" id="username"/>
            </label>
            <input type="submit" name="" id="" value="提交" />
        </form>
    </div>
  )
}
