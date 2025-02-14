import { Supplier } from "@/model/Supplier";
import { SearchSupplier } from "./SearchSupplier";
import Link from "next/link";


export default async function SupplierPage() {



    async function fetchSuppliers(query: string) {

        'use server'

        const url = "http://localhost:3001/api/suppliers?query=" + query;
        const response = await fetch(url, { cache: 'no-store' });
        const suppliers = await response.json() as Supplier[];

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Supplier ID</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map(supplier => {

                        return (
                            <tr key={supplier.id}>
                                <td>{supplier.id}</td>
                                <td>{supplier.name}</td>
                                <td>{supplier.contactPerson}</td>
                                <td>{supplier.email}</td>
                                <td>{supplier.location}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }


    return (

        <div> 
            <h3>Suppliers</h3>

            <Link href="/suppliers/add">Add Supplier</Link>

            <SearchSupplier fetchSuppliers={fetchSuppliers}/>


        </div>

    )
}