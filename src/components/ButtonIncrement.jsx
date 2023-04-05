import React from 'react';

const ButtonIncrement = ({counterValue, setCounterValue}) => {




    const handleIncrementClick = () => {
        setCounterValue(counterValue +1)  
      }


    return (
        <div>
            <button onClick={handleIncrementClick} >⛏️</button>
        </div>
    );
};

export default ButtonIncrement;