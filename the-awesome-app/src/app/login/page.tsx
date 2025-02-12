'use client';

import { ChangeEvent, FormEvent, useState } from "react"

export default function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;
        setUsername(value);
    }
    function handleSubmit(evt: FormEvent<HTMLFormElement>){
            
        evt.preventDefault();
        if(username && password){
            setMessage("");
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
                    <input type="text" className="form-control" id="username" value={username} onChange={handleNameChange} />
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