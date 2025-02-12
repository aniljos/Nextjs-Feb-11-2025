'use client'
import axios from "axios";
import { useEffect, useState } from "react";

const baseUrl = "http://localhost:9000/products";

export default function ListProductsPage(){

    const [products, setProducts] = useState([]);
    
    useEffect(() => {

        console.log("rendering useEffect")
        fetchProducts();
    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get(baseUrl);
            console.log("resp", response.data);
            setProducts(response.data);

        } catch (error) {

            console.log("error", error);
        }
    }

   
    return (
        <div>
            <h3>List Products</h3>
        </div>
    )
}