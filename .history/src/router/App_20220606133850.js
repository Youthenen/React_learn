import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./main";


export default function App(){
    return(
        <BrowserRouter>
        <App />
        </BrowserRouter>
    )
}

// export default function App(){

// }