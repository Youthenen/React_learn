import React,{Component} from 'react'
class App extends Component {
    state = {
        text:'Hello React'
    }
    这里必须用
    changeText = () => {
        this.setState({
            text:'Hello World'
        })
    }
    render() {
        const {text} = this.state
        return(
            <div className="container"> 
                <div>{text}</div>
                <button onClick={this.changeText}></button>
            </div>
        )
    }
}
export default App