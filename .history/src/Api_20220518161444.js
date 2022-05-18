import React,{Component} from 'react'
class App extends Component{
    state = {
        data:[]
    }
    // 生命周期函数，组件已经渲染到dom
    componentDidMount(){
        const url = "'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'"
        fetch(url)
        .then((result) => result.json())
        .then((result) =>)
    }
}