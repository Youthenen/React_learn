import React,{Component} from 'react';
class App extends Component {
    state = {
        title:'我是普通属性',
        imgUrl:'https://img',
        active:false
    }
    render(){
        const {title,img} = this.state
        return(
            <div>
                {/* 绑定普通属性 */}
                <h2 title={title}></h2>
                <img src={img}></img>
                {/* 绑定class */}
                <div className="box">我是div元素</div>
                <div className={"box"+ active? "active":""}>我是div元素</div>
                <label htmlFor=''></label>
                {/* 绑定style */}
                {/* 最外面的括号表示要开始写js代码，里面的括号是对象的表示 */}
                'red'一定要加yin h
                <div style={{color:'red'}}></div>
            </div>
        )
    }
}