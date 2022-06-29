import React,{Component} from 'react'
class App extends Component{
    state = {
        data:[]
    }
    // 生命周期函数，组件已经渲染到dom
    // 引入数据之前确保组件已经渲染到dom上
    componentDidMount(){
        // 利用fetch获取数据
        const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"
        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({data:result})
        })
    }
    render(){
        const {data} = this.state
        const result = data.map((entry,index) => {
            return <li key={index}>{entry}</li>
        })
        return <ul>{result}</ul>
    }
    
} 
export default App
woshizhendehenkun kundaonibuganxianginne