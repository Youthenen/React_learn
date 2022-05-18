import { data } from 'autoprefixer'
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
      <tbody />
    )
  }
// 类组件
class Table extends Component {
    render(){
        return(
          <table>
              <TableHeader />
              <TableBody tableData={data} />
          </table>
        )
    }
}

export default Table