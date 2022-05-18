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
const TableBody = (props) => {
    const rows = props.tableData.map((row,index) =>{
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return(
      <tbod>
    )
  }
// 类组件
class Table extends Component {
    render(){
        // App组件通过tableData属性来传递数据的
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