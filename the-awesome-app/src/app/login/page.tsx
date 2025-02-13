'use client';

import { useLogin } from "./useLogin";


export default function LoginPage() {

    const {username, setPassword, message, handleSubmit, handleNameChange, usernameRef, password} =  useLogin();

    
  
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