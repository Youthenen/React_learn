import React,{Component} from 'react'
class App extends Component {
    state = {
        text:'Hello React'
    }

    // changeText()  {
    //     console.log(this)    //undefined
    //     this.setState({
    //         text:'Hello World'
    //     })
    // }
    // 必须用箭头函数
    changeText = () => {
        // console.log(this)    //App
        this.setState({
            text:'Hello World'
        })
    }
    render() {
        const {text} = this.state
        return(
            <div className="container"> 
                <div>{text}</div>
                <button onClick={this.changeText}>改变文本</button>
            </div>
        )
    }
}
export default App