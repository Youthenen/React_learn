import { BrowserRouter ,Routes,Route } from "react-router-dom";
// import Main from "./main";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Main from "./main";
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
              {/* 当route有孩子的时候，将会嵌套url，当子路由匹配时，将嵌套ui组件进行展示 */}
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} >
                <Route index element={<main style={{padding:'1rem'}}></main>}>
                </Route>
                {/* 添加路径后面的id */}
                <Route path=":invoiceId" element={<Invoices />} />
            </Route>
            {/* 匹配所有路径 */}
            <Route
                path="*"
                element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }
    />
          </Route>
        </Routes>
      </BrowserRouter>
    )
}
