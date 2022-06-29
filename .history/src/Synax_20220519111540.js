import React,{Component} from 'react';
class App extends Component {
    state = {
        title:'我是普通属性',
        imgUrl:'https://img'
    }
    render(){
        return(
            <div>
                <h2 title='我是普通属性'></h2>
                <img src={}></img>
            </div>
        )
    }
}