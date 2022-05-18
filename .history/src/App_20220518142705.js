import React,{Component} from "react"

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
class App extends Component {
  render() {
    return(
      <div className="container">
        <table>
          <TableHeader/>
          <TableBody />
        </table>
      </div>
    )
  }
}
export default App