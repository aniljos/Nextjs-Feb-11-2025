'use client'

import { useEffect } from "react";

type MessageProps = {
    text: string;
    color: string
}
export function Message(props: MessageProps){

    console.log("Message props", props);

    //useEffect(setUp, [list of dependencies]);
    useEffect(() => {
        console.log("[Message] mounted")

        return () => {
            console.log("[Message] unmounted")
        }
    }, [])

    return (
        <div style={{border: `2px solid ${props.color}`, padding: "4px", margin: "4px"}}>
            <h4>Hello {props.text}</h4>
            <p>This is a functional component</p>
            <p>Expression : {5 + 7}</p>
            <p>Generate at {new Date().toLocaleString()}</p>
        </div>
    )
}

