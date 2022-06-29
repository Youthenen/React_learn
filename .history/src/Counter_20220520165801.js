import React,{useState} from 'react';
import Counter_hook from './Component/Counter_hook';
export default function App(){
    const [show,setShow] = useState(true)
    return(
        <div>
            {show && <Counter_hook />}
            <button>点击改变组件的状态</button>
       </div>
    )
}