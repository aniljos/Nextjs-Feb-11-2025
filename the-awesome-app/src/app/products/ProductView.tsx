'use client'
// <ProductView product={product}/>

import { Product } from "@/model/product";
import classes from './page.module.css';
import React from "react";

type ProductViewProps = {
    product: Product;
    onDelete : (product: Product) => void;
    onEdit : (product: Product) => void;

}

export const ProductView = React.memo(function ProductView(props: ProductViewProps){

    const { product, onDelete, onEdit } = props;
    console.log("rendering ProductView ", product.id);
    return (
        <div className={classes.product}>
            <p>Id: {product.id}</p>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <button className="btn btn-warning" onClick={() => {onDelete(product)}}>Delete</button>&nbsp;
            <button className="btn btn-info" onClick={() => onEdit(product)}>Edit</button>
        </div>
    )
})