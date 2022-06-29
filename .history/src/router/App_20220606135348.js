import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Main from "./main";÷
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";

export default function App(){
    return(
        <BrowserRouter>
        <Main />
        </BrowserRouter>
    )
}

// export default function App(){

// }