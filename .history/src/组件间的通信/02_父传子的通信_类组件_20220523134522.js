import React,{Component} from 'react'

class ChildCpn extends Component {
    constructor(props) {
        super();
        this.props = props;
    }
    render(){
        const {name,age} = this.props;
        return(
            <h2>子组件展示数据：{name+age}</h2>
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