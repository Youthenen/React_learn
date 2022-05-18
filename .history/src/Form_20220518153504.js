import React,{Component} from 'react'
class Form extends Component {
    initialState = {
        name:'',
        job:''
    }
    state = this.initialState
    // 将表单的event事件进行传递
    handleChange = (event)=>{
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    render(){
        const {name,value} = this.state
    }
}