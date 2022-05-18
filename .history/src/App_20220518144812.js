import React,{Component} from "react"
import Table from "./Table"

// 状态视为应保存和修改的任何数据，而不必将其添加到数据库中
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