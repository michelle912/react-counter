import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter () {  
    const [size, setSize] = useState(0);
    const [sum, setSum] = useState(0);

    function updateCounterSize(size) {
        setSize(size);

        if (size === 0) {
            setSum(0);
        }
    }

    function incrementSum() {
        setSum(sum+1);
    }

    function decrementSum() {
        setSum(sum-1);
    }


    return (
        <>
        <CounterSizeGenerator updateSize={updateCounterSize}></CounterSizeGenerator>
        <CounterGroupSum sum={sum}></CounterGroupSum>
        <CounterGroup size={size} incrementSum={incrementSum} decrementSum={decrementSum}></CounterGroup>
        </>
    );
}

export default MultiCounter;