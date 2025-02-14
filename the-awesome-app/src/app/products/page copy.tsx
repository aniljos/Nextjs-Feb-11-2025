'use client'
import { Product } from "@/model/Product";
import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useRouter } from "next/navigation";
import { ProductView } from "./ProductView";
import { useTitle } from "@/hooks/useTitle";

const baseUrl = "http://localhost:9000/products";

export default function ListProductsPage(){

   

    const [products, setProducts] = useState<Product[]>([]);
    const [isMessageVisible, setMessageVisible] = useState(false);
    const router = useRouter();
    const noOfClickRef = useRef(0);
    //let noOfClicks = 0;
    useTitle("Products");
    
    useEffect(() => {

        console.log("rendering useEffect")
        fetchProducts();
    }, [])

    async function fetchProducts(){

        
        try {
            
            const response = await axios.get<Product []>(baseUrl);
            console.log("resp", response.data);
            setProducts(response.data);

        } catch (error) {

            console.log("error", error);
        }
    }

    const  deleteProduct = useCallback( async(product: Product) => {

        try {
            const url = baseUrl + "/" + product.id;
            await axios.delete(url);
            //await fetchProducts();

            //copy of products
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id)
            if(index !== -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }
            alert("product deleted with id " + product.id)

        } catch (error) {
         
            console.log(error);
            alert("failed to delete product with id " + product.id)
        }
    }, [products]);

    const editProduct = useCallback( (product: Product) => {
            router.push("/products/" + product.id);
    }, []);

    const totalPrice = useMemo(() => {

        console.log("calculateTotalPrice");
        let totalPrice  = 0;
        products.forEach(p => {

            if(p.price)
            totalPrice += p.price;

        });
        return totalPrice;

    }, [products]);

    function changeVisibility(){
        setMessageVisible(!isMessageVisible);
        noOfClickRef.current++;
        console.log("noOfClicks", noOfClickRef);
    }

   //const mystyle = {display: "flex", flexFlow: "row wrap", justifyContent: "center"};
    return (
        <div>
            <h3>List Products</h3>

            <div>TotalPrice: {totalPrice} </div>

            {isMessageVisible ? <div className="alert alert-info">This page demonstrates API calls and rendering arrays</div>: null}
            <br />
            <button className="btn btn-primary" onClick={changeVisibility}> {isMessageVisible? "Hide" : "Show"} </button>


            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                {products.map(product => {

                    return (
                       <ProductView key={product.id} product={product} onDelete={deleteProduct} onEdit={editProduct}/>
                    )
                })}
            </div>
        </div>
    )
}