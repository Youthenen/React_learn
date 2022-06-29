import { BrowserRouter ,Routes,Route } from "react-router-dom";
// import Main from "./main";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

export default function App(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Routes>
      </BrowserRouter>
    )
}

// export default function App(){

// }