import React from 'react'

export default function App() {
    function handleChange(event) {
        console.log(event.target.value);
    }
    const [fruit,setFruit] = useSta
  return (
    <div>
        <form action="">
            <select name="fruits" id="" onChange={e=>handleChange(e)} value={fruit}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
            </select>
            <input type="submit" value="提交" />
        </form>
    </div>
  )
}
