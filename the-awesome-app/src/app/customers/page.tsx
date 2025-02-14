import { Customer } from "@/model/Customer";
//import axios from "axios";
import Link from "next/link";
import { Suspense } from "react";

//export const dynamic = 'force-dynamic' // Force SSR

export default async function CustomerListingPage(){

    await new Promise((resolve) => setTimeout(resolve, 5000));
    return (
        <div>
            <h3>Customer Listings</h3>
            <p>The page demonstartes suspense and streaming...</p>

            <br />
            <Suspense fallback={<div className="alert alert-warning">Loading the details...</div>}>
                <CustomerPage/>
            </Suspense>
            
        </div>
    )
}


export async function CustomerPage(){

    await new Promise((resolve) => setTimeout(resolve, 10000));
    //api call directly in the function
    const url = "http://localhost:9000/customers";
    //const response = await axios.get<Customer[]>(url);
    //const customers = response.data;

    //const response = await fetch(url); // SSG
    const response = await fetch(url, {cache: 'no-store'}); // SSR
    const customers = await response.json() as Customer[];

    return(
        <div>
            <h5>Customers</h5>

            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => {

                        return (
                            <tr key={customer.id}>
                                <td>{customer.id}</td>
                                <td> <Link href={"/customers/" + customer.id}>{customer.name}</Link> </td>
                                <td>{customer.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}