import React,P from 'react'
class App extends Component {
    state = {
        text:'Hello React'
    }
    changeText(){
        this.setState({
            text:'Hello World'
        })
    }
    render() {
        return(
            <div className="container"> 
                <div>{text}</div>
                <button onClick="changeText"></button>
            </div>
        )
    }
}
export default App