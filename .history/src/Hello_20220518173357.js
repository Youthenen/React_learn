import React from 'react'
class App extends Component {
    state = {
        text:'Hello React'
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