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
                onchange={this.handleChange}/>

            </form>
        )
    }
}