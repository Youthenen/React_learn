import React from 'react'
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
                <td>
                <button onClick={() => props.removeData(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return(
      <tbody>{rows}</tbody>
    )
  }
// 类组件
const Table = (props) => {
    const {tableData,removeData} = props
        // App组件通过tableData属性来传递数据的
        return(
          <table>
              <TableHeader />
              {/* 这里必须接收removeData，接收了它就是tableBody的props，否则后续tableBody里面不会有这个数据 */}
              <TableBody tableData={tableData} removeData = {removeData} />
          </table>
        )
    
}

export default Table