import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
  const [titles] = props.title   s
  return (
    <div>tabControl</div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}