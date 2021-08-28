import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 0}) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);


    return (
        <>
            <h1>CounterApp</h1>
            <p>{counter}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleSubstract}>-</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;