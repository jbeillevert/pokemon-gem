import React from 'react';

const Counter = ({counterValue, gpsValue}) => {

    return (
        <div className='card'>
            <h1>{counterValue} 💎</h1>
            <p>{gpsValue}<br/> Gems per seconds</p>
        </div>
    );
};

export default Counter;