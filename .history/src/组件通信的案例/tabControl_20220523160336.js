import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const {titles}= props
  const [currentIndex,setCurrentIndex] = useState
  return (
    <div className="tab-control">

            {
                titles.map((item)=>{
                    return <div className="tab-item" key={item}>{item}</div>
                })
            }
    </div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}