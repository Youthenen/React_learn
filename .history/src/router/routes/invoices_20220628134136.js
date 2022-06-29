import {  useLocation, NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "./data";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
//   location
//   {
//     pathname: "/invoices",
//     search: "?filter=sa",
//     hash: "",
//     state: null,
//     key: "ae4cz2j"
//   }
// location.search是一个搜索字符串，?q=a,
  return <NavLink to={to + location.search} {...props} />;
}
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
          <input value={searchParams.get('filter') || "" }
          // 将输入框的东西作为搜索参数
          onChange={(event) => {
            let filter = event.target.value
            if(filter){
              // 修改url的搜索参数
                setSearchParams({filter})
            }
            else{
                setSearchParams({})
            }
          }} />
        {/* 过滤出符合条件的 */}
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      {/* 为父路由添加一个出口 */}
      <Outlet></Outlet>
    </div>
  );
}
