import React,{useState} from 'react'
export default function () {
    const [data,setData] = useState([
        {
            id:'1',
            name:'aa',
            price:34,
            date:'2020-01-01',
            number:1
        },
        {
            id:'2',
            name:'bb',
            price:32,
            date:'2020-01-01',
            number:1
        },
        {
            id:'3',
            name:'cc',
            price:30,
            date:'2020-01-01',
            number:1
        }
    ])
  return (
    <div>
        <table border="1" style={{border:'1px solid',borderCollapse: 'collapse'}}>
            <thead>
                <tr>
                    <th></th>
                    <th>书籍名称</th>
                    <th>价格</th>
                    <th>出版日期</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                data.map((item,index)=>{
                    return (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.date}</td>
                            <td>{item.number}</td>
                            <td>
                                <button>-</button>
                                <span>{item.number}</span>
                                <button>+</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}