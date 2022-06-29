import { useParams } from "react-router-dom";
export default function Invoice(){
    let params = useParams()
    let invoice = getInvoice(pa)
    return <h2>Invoice:{params.invoiceId}</h2>
}