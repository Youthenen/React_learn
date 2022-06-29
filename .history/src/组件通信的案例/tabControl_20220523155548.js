import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const {titles}= props
  console.log(titles);
  return (
    <div>
        <ul>
            {
                titles.map((item)=>{
                    return <li key={item}>{item}</li>
                })
            }
        </ul>
    </div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}