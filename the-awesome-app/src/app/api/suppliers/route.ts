import { Supplier } from "@/model/Supplier";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

//GET => http://localhost:3000/api/suppliers


export async function GET(request: Request) {

    // Get the search parameter from the URL, e.g., ?search=term
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    const mongodb_url = "mongodb://localhost:27017";
    const databaseName = "trainingsdb";
    try {
        const client = new MongoClient(mongodb_url, {});
        await client.connect();
        const db = client.db(databaseName);
        const suppliersCollection = db.collection("suppliers");

        // Define filter object based on search parameter.
        let filter = {};
        if (query) {
            // Create conditions for all properties using regex for a case-insensitive search.
            const orConditions = [
                { name: { $regex: query, $options: "i" } },
                { contactPerson: { $regex: query, $options: "i" } },
                { email: { $regex: query, $options: "i" } },
                { location: { $regex: query, $options: "i" } }
            ];

            // If the search term can be converted to a number, add a condition for the id field.
            const numericTerm = Number(query);
            if (!isNaN(numericTerm)) {
                orConditions.push({ id: numericTerm });
            }

            filter = { $or: orConditions };
        }


        const documents = await suppliersCollection.find(filter).toArray();
        const suppliers = documents.map(doc => new Supplier(doc.id, doc.name, doc.contactPerson, doc.email, doc.location));

        return NextResponse.json(suppliers, { status: 200 });

    } catch (error) {
        console.log("Failed to fetch data", error);
        return NextResponse.error();
    }

}

//POST => http://localhost:3000/api/suppliers

export async function POST(request: Request) {
    const supplier = await request.json();


    const mongodb_url = "mongodb://localhost:27017";
    const databaseName = "trainingsdb";
    try {
        const client = new MongoClient(mongodb_url, {});
        await client.connect();
        const db = client.db(databaseName);
        const suppliersCollection = db.collection("suppliers");
        const document = await suppliersCollection.insertOne(supplier);
        const _supplier = { ...supplier, ...document };

        return NextResponse.json(_supplier, { status: 200 });

    } catch (error) {
        console.log("Failed to save data", error);
        return NextResponse.error();
    }
}
//PUT => => http://localhost:3000/api/suppliers