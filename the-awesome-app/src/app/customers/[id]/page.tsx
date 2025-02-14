import { Customer } from "@/model/Customer";
import Link from "next/link";

type CustomerViewPageProps = {
    params: Promise<{id: number}>
}

export default async function CustomerViewPage(props: CustomerViewPageProps){

    const customerId = (await (props.params)).id;
    const url = "http://localhost:9000/customers/" + customerId;
    const response = await fetch(url, {method: "GET"});
    const customer = await response.json() as Customer;

    return (
        <div>
            <h4>Customer View: {customerId}</h4>
            <p>Name: {customer.name}</p>
            <p>Location: {customer.location}</p>

            <Link href="/customers">Back</Link>
        </div>
    )
}