const Clock = function(props){
    const [movies,setMovies] = useState(['你','好','呀'])
    return (
        <div>
            <h1>hello</h1>
            <ul>
                {
                    movies.map((item,index)=>{
                        return <li onClick={btnClick()}>item</li>
                    })

                }
            </ul>
           
            
        </div>
    )

    // 通过数组可以返回多个元素类型
    // return (
    //     [
    //         <div>这是第一个</div>,
    //         <div>这是第二个</div>
    //     ]
    // )
    
    // 不可以返回对象
    // return {

    // }

    // 返回字符串或者数值
    // return "aaa"
    // return 123
}