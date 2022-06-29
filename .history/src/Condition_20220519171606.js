import React,{Component} from 'react';
// 实现v-show
export default function Condition(){
    const [isLogin,setLogin] = useState(false)
    const isShow = isLogin ? 'block' : 'none'
    return(
        <div>
            <div style={dis}>你好包包</div>
            <button onClick={()=>{setLogin(!isLogin)}}>{isLogin?'退出':'登录'}</button>
        </div>
    )
}