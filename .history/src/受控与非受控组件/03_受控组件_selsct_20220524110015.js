import React,{useState} from 'react'

export default function App() {
    function handleChange(event) {
        console.log(event.target.value);
        // 修改fruit
        setFruit(event.target.value);
    }
    const [fruit,setFruit] = useState("orange")
  return (
    <div>
        <form action="">
            {/* 通过给select标签添加value属性，从而设置默认值 */}
            <select name="fruits" id="" onChange={e=>handleChange(e)} value={fruit}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
            </select>
            <input type="submit" value="提交" />
        </form>
    </div>
  )
}
