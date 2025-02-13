'use client';

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTitle } from "@/hooks/useTitle";

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const usernameRef = useRef<HTMLInputElement>(null);
    useTitle("Login");
    

    useEffect(() => {
        usernameRef.current?.focus();
        //document.title = document.title + " Login";
    }, [])

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;
        setUsername(value);
    }
    async function handleSubmit(evt: FormEvent<HTMLFormElement>){
            
        evt.preventDefault();

        console.log("username", usernameRef.current?.value);
        if(username && password){

            //API call
            // const url = "http://localhost:9000/login";
            // axios
            //     .post(url, {name: username, password: password})
            //     .then((response) => {

            //         // status codes : 100, 200, 300
            //         console.log("fulfilled", response);
            //     })
            //     .catch(error => {

            //         // status codes : status 400, 500
            //         console.log("rejected", error);
            //     })


            try {

                const url = "http://localhost:9000/login";
                const response = await axios.post(url, {name: username, password: password});
                console.log("fulfilled", response);
                setMessage("");
                router.push("/");
            
            } catch (error) {
                
                console.log("rejected", error);
                setMessage("Invalid Credentials");
            }
            

           
        }
        else{
            setMessage("Enter the credentials");
        }
    }

    return (
        <div>
            <h3>Login</h3>
            <p>Sign-in to your application</p>

            {message ? <div className="alert alert-danger">{message}</div> : null}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" className="form-control" id="username" 
                                value={username} onChange={handleNameChange} ref={usernameRef}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" value={password}
                        onChange={evt => setPassword(evt.target.value)} />
                </div>

                <br />
                <button className="btn btn-success">Login</button>

            </form>
        </div>
    )
}