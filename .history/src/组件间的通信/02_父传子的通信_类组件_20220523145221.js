import React,{Component} from 'react'

class ChildCpn extends Component {
    constructor(props) {
        // 通过props获得父组件的数据
        // super();
        // this.props = props;

        将
        super(props);
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