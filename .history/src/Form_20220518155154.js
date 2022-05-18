import React,{Component} from 'react'
class Form extends Component {
    initialState = {
        name:'',
        job:''
    }
    state = this.initialState
    // input框输入数据，同步处理表单状态变化
    // 将表单的event事件进行传递
    handleChange = (event)=>{
        const {name,value} = event.target
        // 修改状态
        this.setState({
            [name]:value
        })
    }
submit
    render(){
        // form表单的状态
        const {name,job} = this.state
        return(
            <form>
                <label htmlFor='name'>Name</label>
                <input 
                type='text' 
                name='name'
                id='name'
                value={name}
                onChange={this.handleChange}/>
                <label htmlFor='job'>Job</label>
                <input 
                type='text' 
                name='job'
                id='job'
                value={job}
                onChange={this.handleChange}/>

            </form>
        )
    }
}
export default Form