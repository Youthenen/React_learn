import React,{useState} from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const {titles}= props
  const [currentIndex,setCurrentIndex] = useState(0)
  return (
    <div className="tab-control">

            {
                titles.map((item,index)=>{
                    return( <div className={"tab-item "+ (index === currentIndex ? "checked" : "")} key={item}>{item}</div>
                
                })
            }
    </div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}