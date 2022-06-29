import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// export default function App(){

// }