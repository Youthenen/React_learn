const Clock = function(props){
    const [movies,setMovies] = useState(['你','好','呀'])
    // return (
    //     <div>
    //         <h1>hello</h1>
    //         <ul>
    //             {
    //                 movies.map((item,index)=>{
    //                     return <li onClick={btnClick()}>item</li>
    //                 })

    //             }
    //         </ul>
           
            
    //     </div>
    // )
    return (
        [
            <div>这是第一个</div>,
            <div>这是第二个</div>
        ]
    )
}