import { useParams } from "react-router-dom";
export default function Invoice(){
    let params = useParams()
    let invoice = new Invoiceoice = new Invoice
    return <h2>Invoice:{params.invoiceId}</h2>
}