import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./Counter";

function CounterGroup(props) {

    const [counterList, setCounterList] = useState([]); 
    const size = useSelector(state => state.size.value);

    useEffect( () => {
        var newCounterList = new Array(size).fill(Date.now);
        setCounterList(newCounterList);
    }
    , [size]);
    
    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item + index}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;