import { useParams } from "react-router";
import { getInvoices } from "../data";


export default function Invoice() {
    let invoiceData = getInvoices();
    let params = useParams()
    return (
    <div style={{marginLeft : '1rem'}}>
        {
            invoiceData.map((invoiceElem)=>(
                    invoiceElem.number === parseInt(params.invoiceId))  ?
                        <div key={invoiceElem.number}>
                            <h2>Client name : {invoiceElem.name}</h2>
                            <h3>Due Amount : {invoiceElem.amount}</h3>
                            <h3>Due Date : {invoiceElem.due}</h3>
                        </div>   : null)
        }
    </div>
    )
  }
