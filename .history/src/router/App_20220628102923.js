import { BrowserRouter ,Routes,Route,NavLink,Outlet,useSearchParams } from "react-router-dom";
// import Main from "./main";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Main from "./main";
import Invoice from './routes/invoice'
export default function App(){
    return(
        <BrowserRouter>
        <Routes>
          <Rounte path="/" element={<Main />} >
              {/* 当route有孩子的时候，将会嵌套url，当子路由匹配时，将嵌套ui组件进行展示 */}
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} >
                {/* 索引路由index，当父路由匹配但是其他子路由匹配的时候，使用这个索引路由匹配
                索引路由是父路由的默认子路由 */}
                <Route index element={<main style={{padding:'1rem'}}>
                    <p>select an invoice</p>
                </main>}>
                </Route>
                {/* 添加路径后面的id */}
                <Route path=":invoiceId" element={<Invoice />} />
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
          </Rounte>
        </Routes>
      </BrowserRouter>
    )
}
