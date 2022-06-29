import React from 'react'
function Header(){
    return <h2>header</h2>
}
function Foot(){
    return <h2>Foot</h2>
}
function Banner(){
    return <h3>轮播图</h3>
}
function Main(){
    return <h2>main</h2>
}
export default function App(){
    return (
        <div>
            <Header />
            <Main>
                <Banner ></Banner>
            </Main>
            <Foot />
        </div>
    )
}