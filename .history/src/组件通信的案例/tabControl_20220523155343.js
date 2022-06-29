import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(props) {
console.log(prop);
  return (
    <div>tabControl</div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}