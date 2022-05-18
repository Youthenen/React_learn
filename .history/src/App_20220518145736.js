import React,{Component} from "react"
import Table from "./Table"

// 状态视为应保存和修改的任何数据，而不必将其添加到数据库中
// 必须通过setState来修改数组
class App extends Component {
  state = {
    data :[
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
  }
  // 返回了去除了索引为index的数组
  remove = (index) => {
    const {data} = this.state
    this.setState({
      // filter会创建一个新的数组
      data:data.filter((d,i) => {
        return i!== index
      })
    })
  }
  render() {
    const {data} = this.state
    return(
      <div className="container">
        <Table tableData={data} removeCharacter =/>
      </div>
    )
  }
}
export default App