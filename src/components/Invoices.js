import { NavLink, Outlet} from "react-router-dom";
import { getInvoices } from "../data";

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav className='nav-invoices'>
        {invoices.map(invoice => (
        <NavLink style={({ isActive }) => { return {color: isActive ? "red" : ""}; }} 
          className='Link' to={`/invoices/${invoice.number}`} key={invoice.number} >
          {invoice.name}
        </NavLink>
            // className='{({ isActive }) => isActive ? "red" : "blue"}
            // <ul>
            //     <li>{invoice.name}</li>
            // </ul>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}