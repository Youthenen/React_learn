import React, { Component } from 'react'
// 简单组件
const TableHeader = () => {
    return(
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
  }
const TableBody = () => {
    return(
      <tbody>
        <tr>
          <th>hhhhh</th>
          <th>huuuuu</th>
        </tr>
        <tr>
          <th>hhhhh</th>
          <th>huuuuu</th>
        </tr>
        <tr>
          <th>hhhhh</th>
          <th>huuuuu</th>
        </tr>
      </tbody>
    )
  }
// 类组件
class Table extends Component {
    render(){
        return(
          <table>
              <TableHeader />
              <TableBody />
          </table>
        )
    }
}

export default Table