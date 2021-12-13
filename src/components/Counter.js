import { useState } from "react";

function Counter(props) {

    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number+1);
        props.increment();
    }

    function decrement() {
        setNumber(number-1);
        props.decrement();
    }

    return (
        <div>
            <button onClick={increment}>+</button>
            <span>{number}</span>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default Counter;