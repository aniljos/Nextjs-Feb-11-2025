import { Supplier } from "@/model/Supplier";


export default async function SupplierPage(){

    const url = "http://localhost:3001/api/suppliers";
    const response = await fetch(url, {cache: 'no-store'});
    const suppliers = await response.json() as Supplier[];

    return (

        <div>
            <h3>Suppliers</h3>

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
        </div>

    )
}