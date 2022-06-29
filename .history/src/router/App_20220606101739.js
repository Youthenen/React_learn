import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="">Invoices</Link> |{" "}
        <Link to="">Expenses</Link>
      </nav>
    </div>
  );
}
// export default function App(){

// }