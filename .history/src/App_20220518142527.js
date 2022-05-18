import React,{Component} from "react"
import Table from "./Table"

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
        <th>Name</th>
        <th>Job</th>
      </tr>
    </tbody>
  )
}
class App extends Component {
  render() {
    return(
      <div className="container">
        <Table />
      </div>
    )
  }
}
export default App