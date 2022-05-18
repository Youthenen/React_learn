import React, { Component } from 'react'
class Table extends Component {
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Char</th>
                        <th>nurse</th>
                    </tr>
                    <tr>
                        <th>Char</th>
                        <th>nurse</th>
                    </tr>
                    <tr>
                        <th>Char</th>
                        <th>nurse</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table