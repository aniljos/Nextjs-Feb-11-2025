import { Product } from "@/model/Product";
import { AppState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function useProducts(endPointUrl: string){


    const [products, setProducts] = useState<Product[]>([]);
    const auth = useSelector((state: AppState) => state.auth);
    useEffect(() => {

            fetchProducts();
    }, [])
    const router  = useRouter();

    async function fetchProducts(){

        try {

            if(!auth.isAuthenticated){
                router.push("/login");
                return;
            }
            
            const headers = {"Authorization": `Bearer ${auth.accessToken}`};
            const response = await axios.get<Product []>(endPointUrl, {headers});
            console.log("resp", response.data);
            setProducts(response.data);

        } catch (error) {

            console.log("error", error);
        }
    }

    return {products, setProducts, fetchProducts};
}