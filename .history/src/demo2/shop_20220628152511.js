import React from 'react'

export default function () {
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
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
