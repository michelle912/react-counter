import { useState } from "react";

function CounterSizeGenerator(props) {

    const [size, setSize] = useState(0);

    function handleCounterSize(event) {
        var counterSize = parseInt(event.target.value);
        counterSize = isNaN(counterSize) || counterSize < 0 ? 0 : counterSize;
        setSize(counterSize);
        props.updateSize(counterSize);
    }

    return (
        <div>
           <span>Size:</span>
           <input value={size} type="number" onChange={handleCounterSize}></input>
        </div>
    );
}

export default CounterSizeGenerator;