import React from 'react';
imp
// props作为参数传递给组件函数
function ChildCpn(props) {
    const {name,age} = props;
    return(
        <div>
            <ul>
                {name}
            </ul>
        </div>
    )
}
export default function App(){
       return(
            <div>
                <ChildCpn name="why" age="18"></ChildCpn>
            </div>
        )
}