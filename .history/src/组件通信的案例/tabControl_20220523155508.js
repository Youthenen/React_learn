import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const {titles}= props
  return (
    <div>
        <ul>
            {
                titles.map(functio)
            }
        </ul>
    </div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}