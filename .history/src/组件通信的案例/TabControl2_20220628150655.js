import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
export default function TabControl(props) {
  const {titles}= props
  const [currentIndex,setCurrentIndex] = useState(0)
  function btnClick(index){
        setCurrentIndex(index)
  }
  return (
    <div className="tab-control">

            {
                titles.map((item,index)=>{
                    return(
                        <div className={"tab-item "+ (index === currentIndex ? "checked" : "")} 
                            onClick={btnClick.bind(this,index)}
                            key={item}>
                            {item}
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
Rea