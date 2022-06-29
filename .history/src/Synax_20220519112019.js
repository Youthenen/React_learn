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
            </div>
        )
    }
}