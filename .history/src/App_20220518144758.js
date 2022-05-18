import React,{Component} from "react"
import Table from "./Table"


class App extends Component {
  render() {
    const data = [
      {
        name:"hhhh",
        job:'uuuuu'
      },
      {
        name:"hhhh",
        job:'uuuuu'
      },
      {
        name:"hhhh",
        job:'uuuuu'
      },
      {
        name:"hhhh",
        job:'uuuuu'
      }
    ]
    return(
      <div className="container">
        <Table tableData={data} />
      </div>
    )
  }
}
export default App