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
              当route有孩子的时候，将会嵌套url，
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} >
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

// export default function App(){

// }