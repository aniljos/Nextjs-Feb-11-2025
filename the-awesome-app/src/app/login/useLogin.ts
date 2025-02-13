
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useTitle } from "@/hooks/useTitle";
import { useDispatch } from "react-redux";

export function useLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();
    const usernameRef = useRef<HTMLInputElement>(null);
    useTitle("Login");
    const dispatch = useDispatch();


    useEffect(() => {
        usernameRef.current?.focus();
        //document.title = document.title + " Login";
    }, [])

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>) {

        const value = evt.target.value;
        setUsername(value);
    }
    async function handleSubmit(evt: FormEvent<HTMLFormElement>) {

        evt.preventDefault();

        console.log("username", usernameRef.current?.value);
        if (username && password) {

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
                const response = await axios.post(url, { name: username, password: password });
                dispatch({
                    type: "login", payload: {
                        isAuthenticated: true,
                        username: username,
                        accessToken: response.data.accessToken,
                        refreshToken: response.data.refreshToken
                    }
                })

                console.log("fulfilled", response);
                setMessage("");
                router.push("/products");

            } catch (error) {

                console.log("rejected", error);
                setMessage("Invalid Credentials");
                dispatch({type: "logout"})
            }



        }
        else {
            setMessage("Enter the credentials");
        }
    }

    return { username, setUsername, password, setPassword, message, handleSubmit, handleNameChange, usernameRef };

}