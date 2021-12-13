import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSize } from "./sizeSlice";

function CounterSizeGenerator(props) {

    const [size, setSize] = useState(0);
    const dispatch = useDispatch();

    function handleCounterSize(event) {
        var counterSize = parseInt(event.target.value);
        counterSize = isNaN(counterSize) || counterSize < 0 ? 0 : counterSize;
        setSize(counterSize);
        dispatch(updateSize(counterSize))
    }

    return (
        <div>
           <span>Size:</span>
           <input value={size} type="number" onChange={handleCounterSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;