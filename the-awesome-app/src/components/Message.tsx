type MessageProps = {
    text: string;
    color: string
}
export function Message(props: MessageProps){

    console.log("Message props", props);
    return (
        <div style={{border: `2px solid ${props.color}`, padding: "4px", margin: "4px"}}>
            <h4>Hello {props.text}</h4>
            <p>This is a functional component</p>
            <p>Expression : {5 + 7}</p>
            <p>Generate at {new Date().toLocaleString()}</p>
        </div>
    )
}

