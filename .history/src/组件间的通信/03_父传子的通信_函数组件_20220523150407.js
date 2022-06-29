import React from 'react';
function ChildCpn(props) {
    const {name,age} = props;
    return(
        <h2></h2>
    )
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