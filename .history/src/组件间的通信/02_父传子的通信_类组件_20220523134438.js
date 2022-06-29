import React,{Component} from 'react'

class ChildCpn extends Component {
    constructor(props) {
        super();
    }
    render(){
        return(
            <h2>子组件展示数据：{"why"+"18"}</h2>
        )
    }
}
export default class App extends Component {
    render(){
        return(
            <div>
                <ChildCpn name="why" age="18"></ChildCpn>
            </div>
        )
    }
}