'use client'
import {MouseEvent, useEffect, useState} from 'react';
import { Message } from './Message';


//<Counter initialValue={5} />
type CounterProps = {
    initialValue: number
}

export function Counter(props: CounterProps){

    
    console.log("rendeering Counter..");
    const [counter, setCounter] = useState(props.initialValue);

    useEffect(() => {

        console.log("Counter updated", counter);
       
    }, [counter]);

    function inc(evt: MouseEvent<HTMLButtonElement>){
        console.log("inc invoked...", evt);
        //props.initialValue++; // this is read-only
        //setCounter(counter + 1);
        //setCounter(counter + 1);
        setCounter(prevCounter => prevCounter + 1);
        setCounter(prevCounter => prevCounter + 1);
        console.log("counter", counter);
    }   
    function decr(){
        setCounter(counter - 1);
    }

    return (
        <div>
            <h4>Counter: {counter}</h4>
            <div>
                <button onClick={inc}>Inc</button> &nbsp;
                <button onClick={decr}>Decr</button>
            </div>
            {counter > 5 ? <Message text={"Counter " + counter} color='blue'/> : null}
            
        </div>
    )
}
