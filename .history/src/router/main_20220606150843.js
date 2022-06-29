import { Link ,Outlet} from "react-router-dom";

export default function Main() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">hh Invoices 导航栏的名字</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
        
      </nav>
      添加了这个标签之后，即使切换zi lu you
      <Outlet />
    </div>
  );
}