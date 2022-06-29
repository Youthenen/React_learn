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
                <h2 title={title}></h2>
                <img src={img}></img>
                <div className="box">我是div元素</div>
                <div className={"box"+"active? "active:""}>我是div元素</div>
            </div>
        )
    }
}