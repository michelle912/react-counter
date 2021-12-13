import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement as decrementSum, increment as incrementSum } from "./sumSlice";

function Counter() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number+1);
        dispatch(incrementSum());
    }

    function decrement() {
        setNumber(number-1);
        dispatch(decrementSum());
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