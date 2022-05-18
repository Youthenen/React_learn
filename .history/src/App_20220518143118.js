import React,{Component} from "react"
import Table from "./Table"

class App extends Component {
  render() {
    const data = [
      {
        name:""
      }
    ]
    return(
      <div className="container">
        <Table />
      </div>
    )
  }
}
export default App