'use client'

import { saveForm } from "@/actions/actions";
import { useActionState } from "react";

export default function AddSupplierPage() {

    const [state, formAction] = useActionState(saveForm, { status: 0, message: "Pending"});

    return <div>

        <h4>Add Supplier</h4>

        <form action={formAction} >

            Message: { state.message}, Status: {state.status}

            <div className="form-group">
                <label htmlFor="id">ID</label>
                <input id="id" name="supplierId" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="supplierName" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input id="location" name="location" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="contactPerson">Contact</label>
                <input id="contactPerson" name="contactPerson" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" className="form-control" />
            </div>
            <br />
            <button className="btn btn-info">Save</button>

        </form>

    </div>
}