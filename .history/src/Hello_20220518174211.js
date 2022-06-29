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
        // changeText()  {
    //     console.log(this)    //undefined
    //     this.setState({
    //         text:'Hello World'
    //     })
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