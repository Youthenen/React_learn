import React from 'react'
import PropTypes from 'prop-types'
export default function TabControl(prop) {
console.log(prop);
  return (
    <div>tabControl</div>
  )
}
TabControl.prototype = {
    titles:PropTypes.array.isRequired
}