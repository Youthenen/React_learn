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
        
        const {tableData} = this.props
        return(
          <table>
              <TableHeader />
              <TableBody tableData={tableData} />
          </table>
        )
    }
}

export default Table