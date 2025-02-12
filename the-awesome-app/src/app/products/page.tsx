'use client'
import { Product } from "@/model/product";
import axios from "axios";
import { useEffect, useState } from "react";
import classes from './page.module.css';
import { useRouter } from "next/navigation";

const baseUrl = "http://localhost:9000/products";

export default function ListProductsPage(){

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    
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

    async function deleteProduct(product: Product){

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
    }

    function editProduct(product: Product){
            router.push("/products/" + product.id);
    }

   //const mystyle = {display: "flex", flexFlow: "row wrap", justifyContent: "center"};
    return (
        <div>
            <h3>List Products</h3>
            <div style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
                {products.map(product => {

                    return (
                        <div key={product.id} className={classes.product}>
                            <p>Id: {product.id}</p>
                            <p>{product.name}</p>
                            <p>{product.description}</p>
                            <p>Price: {product.price}</p>
                            <button className="btn btn-warning" onClick={() => {deleteProduct(product)}}>Delete</button>&nbsp;
                            <button className="btn btn-info" onClick={() => editProduct(product)}>Edit</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}