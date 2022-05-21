import { useEffect, useState} from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(
        () => {
            console.log('mount');
        }, [counter]
    );
    return(
        <div>
            <button
                 onClick={() => setCounter(counter - 1)}
                 >
            Decrease
            </button>
            <span>{`The counter's value is: ${counter}`}</span>
            <button
                onClick={() => setCounter(counter + 1)}
            >
            Increase
            </button>
        </div>
    );
}