import React from 'react';
// props作为参数传递给组件函数
function ChildCpn(props) {
    const {name,age} = props;
    return(
        <h2>{name+age}</h2>
    )
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