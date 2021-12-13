import { useEffect, useState } from "react";
import Counter from "./Counter";

function CounterGroup(props) {

    const [counterList, setCounterList] = useState([]); 

    useEffect( () => {
        var newCounterList = new Array(props.size).fill(Date.now);
        setCounterList(newCounterList);
    }
    , [props.size]);

    function incrementSum(){
        props.incrementSum();
    }

    function decrementSum(){
        props.decrementSum();
    }
    
    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index} increment={incrementSum} decrement={decrementSum}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;