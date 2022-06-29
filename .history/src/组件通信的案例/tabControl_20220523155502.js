import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const {titles}= props
  return (
    <div>
        <ul>
            {
                t
            }
        </ul>
    </div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}