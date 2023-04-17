import React from 'react';

const ButtonIncrement = ({counterValue, setCounterValue}) => {




    const handleIncrementClick = () => {
        setCounterValue(counterValue +1)  
    }


    const banEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    }


    return (
        <div>
            <button onClick={handleIncrementClick} onKeyDown={banEnter}   >⛏️</button>
        </div>
    );
};

export default ButtonIncrement;