import React,{Component} from "react"
import Table from "./Table"
import Form from "./Form"

// 状态视为应保存和修改的任何数据，而不必将其添加到数据库中
// 必须通过setState来修改数组
class App extends Component {
  state = {
    data :[
      {
        name:"hhhh",
        job:'yuu'
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
        job:'s'
      }
    ]
  }
  // 返回了去除了索引为index的数组
  removeData = (index) => {
    const {data} = this.state
    this.setState({
      // filter会创建一个新的数组
      data:data.filter((d,i) => {
        return i!== index
      })
    })
  }
  // 将子组件传递过来的参数data
  handleSubmit = (data) => {
    set
    this.setState({data: [...this.state.data,data]})
  }
  render() {
    const {data} = this.state
    return(
      <div className="container">
        <Table tableData={data} removeData = {this.removeData}/>
        {/* 将提交数据的方法作为参数传递给form */}
        <Form  handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
export default App