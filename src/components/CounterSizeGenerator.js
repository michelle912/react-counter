import { useState } from "react";
import { useDispatch } from "react-redux";
import { RESET_SUM, UPDATE_SIZE } from "../constants/constants";

function CounterSizeGenerator(props) {

    const [size, setSize] = useState(0);
    const dispatch = useDispatch();

    function handleCounterSize(event) {
        var counterSize = parseInt(event.target.value);
        counterSize = isNaN(counterSize) || counterSize < 0 ? 0 : counterSize;
        setSize(counterSize);
        dispatch({type: UPDATE_SIZE, payload: counterSize});

        if (counterSize === 0) {
            dispatch({type: RESET_SUM});
        }
    }

    return (
        <div>
           <span>Size:</span>
           <input value={size} type="number" onChange={handleCounterSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;