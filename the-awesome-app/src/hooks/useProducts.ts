import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";

export function useProducts(endPointUrl: string){


    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

            fetchProducts();
    }, [])

    async function fetchProducts(){

        try {
            
            const response = await axios.get<Product []>(endPointUrl);
            console.log("resp", response.data);
            setProducts(response.data);

        } catch (error) {

            console.log("error", error);
        }
    }

    return {products, setProducts, fetchProducts};
}