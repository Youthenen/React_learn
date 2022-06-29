import React from 'react'

export default function App() {
    function handleChange(event) {
        
    }
  return (
    <div>
        <form action="">
            <select name="fruits" id="" onChange={e=>handleChange(e)}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
            </select>
            <input type="submit" value="提交" />
        </form>
    </div>
  )
}
