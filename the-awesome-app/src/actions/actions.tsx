'use server'

import { Supplier } from "@/model/Supplier";
import { redirect } from "next/navigation";

export async function sayHello(message: string){

    //dataaccess
    console.log("invoking sayHello...");
    //return "Hello "  + message;
    return (
        <div>
            <p>Hello {message}</p>
            <p>Generated on {new Date().toLocaleString()}</p>
        </div>
    )
}

export async function saveForm(prevData:object, formData: FormData){

    //validations
    const id = formData.get("supplierId");
    if(!id){
        return {
            status: 1, message: "Invalid supplierId"
        }
    }

    const supplier = new Supplier(
                            Number(formData.get("supplierId")?.toString()), 
                            formData.get("supplierName")?.toString() || "",
                            formData.get("contactPerson")?.toString() || "",
                            formData.get("email")?.toString() || "",
                            formData.get("loaction")?.toString() || "")
    console.log("supplier", supplier);

    //save to the database

    redirect("/suppliers");


}