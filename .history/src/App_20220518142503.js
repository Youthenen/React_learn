import React,{Component} from "react"
import Table from "./Table"

const Tableheader = () => {
  return(
    <thead>
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
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