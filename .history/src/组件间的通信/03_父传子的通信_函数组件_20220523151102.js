import React from 'react';
import PropTypes from 'prop-types';
// props作为参数传递给组件函数
function ChildCpn(props) {
    const {name,age,names} = props;
    return(
        <div>
            <ul>
                {
                names.map((item,index)=>{
                    return <li key={index}>{item}</li>
                })
                }
            </ul>
        </div>
    )
}
对s h
ChildCpn.propTypes ={
    name:PropTypes.string,
    names:PropTypes.array,
    age:PropTypes.number

}
export default function App(){
       return(
            <div>
                <ChildCpn name="why" age={18} names={["abc",'abc']}></ChildCpn>
            </div>
        )
}