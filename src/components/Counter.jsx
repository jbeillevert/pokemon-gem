import React, { useEffect } from 'react';

const Counter = ({counterValue, gpsValue, setCounterValue}) => {

    useEffect(() => {
        const interval = setInterval(() => {
            setCounterValue((prevCounterValue) => prevCounterValue + Math.round(gpsValue / 5))  
        }, 200);
        return () => clearInterval(interval)
    })


    return (
        <div className='card'>
            <h1>{counterValue} 💎</h1>
            <p>{gpsValue} Gems per seconds</p>
        </div>
    );
};

export default Counter;