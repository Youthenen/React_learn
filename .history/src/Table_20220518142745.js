import React, { Component } from 'react'
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
class Table extends Component {
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Char</th>
                        <th>nurse</th>
                    </tr>
                    <tr>
                        <th>Char</th>
                        <th>nurse</th>
                    </tr>
                    <tr>
                        <th>Char</th>
                        <th>nurse</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table