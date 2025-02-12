'use client'

import { useParams } from "next/navigation"

export default function EditProductPage(){

    const params = useParams();

    return (
        <div>
            <h4>Edit Product: {params.id}</h4>

            <form>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" id="desc" className="form-control"/>
                </div>

                <br />

                <button className="btn btn-success">Save</button>&nbsp;
                <button className="btn btn-danger">Cancel</button>

            </form>
        </div>
    )
}