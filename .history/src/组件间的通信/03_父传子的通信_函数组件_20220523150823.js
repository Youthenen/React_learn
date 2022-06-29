import React from 'react';
import PropTypes from 'prop-types';
// props作为参数传递给组件函数
function ChildCpn(props) {
    const {name,age} = props;
    return(
        <div>
            <ul>
                {names}
            </ul>
        </div>
    )
}
export default function App(){
       return(
            <div>
                <ChildCpn name="why" age="18" names="123"></ChildCpn>
            </div>
        )
}