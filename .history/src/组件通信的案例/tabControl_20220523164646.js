import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const {titles}= props
  const [currentIndex,setCurrentIndex] = useState(0)
  子组件的index
  function itemClick(index) {
    setCurrentIndex(index)
    const {tabsClick} = props
    // 调用父组件中的回调函数{index => tabClick(index)} 并把index传过去
    tabsClick(index)
  }
  return (
    <div className="tab-control">

            {
                titles.map((item,index)=>{
                    return(
                        <div className={"tab-item "+ (index === currentIndex ? "checked" : "")} 
                            onClick={itemClick.bind(this,index)}
                            key={item}>
                           <span>{item}</span>
                            
                         </div>
                    )
                })
            }
    </div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}