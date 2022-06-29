import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "./data";
export default function Invoices() {
    let [searchParams,setSearchParams] = useSearchParams()
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
          <input value={searchParams. } />
        {invoices.map((invoice) => (
            // 使用navlink可以标记当前哪一个导航栏被选中
          <NavLink
            style={({isActive})=>{ return { display: "block", margin: "1rem 0",color:isActive?'red':'' }}}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </NavLink>
        ))}
      </nav>
      {/* 为父路由添加一个出口 */}
      <Outlet></Outlet>
    </div>
  );
}