import { useParams } from "react-router-dom";
export default function Invoice(){
    let params = useParams()
    let inv
    return <h2>Invoice:{params.invoiceId}</h2>
}