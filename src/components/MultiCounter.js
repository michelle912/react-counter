import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupSum from "./CounterGroupSum";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter () {  

    return (
        <>
        <CounterSizeGenerator></CounterSizeGenerator>
        <CounterGroupSum></CounterGroupSum>
        <CounterGroup></CounterGroup>
        </>
    );
}

export default MultiCounter;