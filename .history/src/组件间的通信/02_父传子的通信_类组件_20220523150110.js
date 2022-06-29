import React,{Component} from 'react'

class ChildCpn extends Component {

    // constructor(props) {
    //     // 通过props获得父组件的数据
    //     // 方式一：
    //     // super();
    //     // 保存props
    //     // this.props = props;

    //     // 方式二：
    //     // 将props传给父类的构造函数，然后在父类里面this.props = props;
    //     super(props);
    // }
    render(){
        // 其实就是保存到自己的this，因为在子类里面，是通过bind的方式去绑定了子类的this
        const {name,age} = this.props;
        return( 
            <h2>子组件展示数据：{name+age}</h2>
        )
    }
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