'use client'

import { JSX, useRef, useState } from "react"
import { sayHello } from "@/actions/actions";

type SearchSupplierProps = {

    fetchSuppliers: (query: string) => Promise<JSX.Element>
}

export function SearchSupplier(props: SearchSupplierProps){

    const {fetchSuppliers} = props;

    const serachInputRef = useRef<HTMLInputElement>(null);
    const [messageView, setMessageView] = useState<JSX.Element>();
    const [suppliersView, setSuppliersView] = useState<JSX.Element>();

    async function search(){
        const searchText = serachInputRef.current?.value;
        if(searchText){
            const _messageView = await sayHello(searchText);
            setMessageView(_messageView);

            const _supplierView = await fetchSuppliers(searchText);
            setSuppliersView(_supplierView);
        }
    }   
    return (

        <div>
            <h5>Search</h5>

            <input type="search" className="form-control" ref={serachInputRef}/>
            <br />
            <button className="btn btn-primary" onClick={search}>Search</button>

            <div>
                {messageView}
            </div>
            <div>
                {suppliersView}
            </div>
            {/* <div>
                {"Client Date" + new Date().toLocaleString()}
            </div> */}

        </div>
    )
}