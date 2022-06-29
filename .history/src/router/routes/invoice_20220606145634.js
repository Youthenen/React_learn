import { useParams } from "react-router-dom";
import { getInvoice }
 export default function Invoice(){
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId,10))
    return <h2>Invoice:{params.invoiceId}</h2>
}