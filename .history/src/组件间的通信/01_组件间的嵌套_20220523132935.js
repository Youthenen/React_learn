import React from 'react'
import { renderIntoDocument } from 'react-dom/test-utils'
function Header(){
    return <h2>header</h2>
}
function Foot(){
    return <h2>Foot</h2>
}
function Banner(){
    renderIntoDocument
}
function Main(){
    return <h2>main</h2>
}
export default function App(){
    return (
        <div>
            <Header />
            <Main />
            <Foot />
        </div>
    )
}