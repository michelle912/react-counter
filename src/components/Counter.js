import { useState } from "react";
import { useDispatch } from "react-redux";
import { DECREMENT_SUM, INCREMENT_SUM } from "../constants/constants";

function Counter() {
    const dispatch = useDispatch();
    const [number, setNumber] = useState(0);

    function increment() {
        setNumber(number+1);
        dispatch({type: INCREMENT_SUM, payload: 1});
    }

    function decrement() {
        setNumber(number-1);
        dispatch({type: DECREMENT_SUM, payload: 1});
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