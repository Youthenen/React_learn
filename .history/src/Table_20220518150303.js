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
// 通过传递参数的方式将app组件的数据传给table
// props数据是只读的
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
      <tbody>{rows}</tbody>
    )
  }
// 类组件
class Table extends Component {
    render(){
        // App组件通过tableData属性来传递数据的
        const {tableData,removeData} = props
        return(
          <table>
              <TableHeader />
              <TableBody tableData={tableData} removeData = {removeData} />
          </table>
        )
    }
}

export default Table