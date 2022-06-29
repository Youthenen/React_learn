import React from 'react';
function ChildCpn(props) {
    const {name,age} = props;
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