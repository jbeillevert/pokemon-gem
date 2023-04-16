import React, { useState, useEffect } from 'react';
import myImage from '../assets/img/animated-pokemons/001.gif'

const Pokecard = ({pokename, pokeprice, pricetx, pokeimg, pokegps, gems, setgem, gpstx, updateGpsValue}) => {

    
    const [lvlPoke, setLvlPoke] = useState(1)
    const [pricePoke, setPricePoke] = useState(pokeprice)
    const [gpsPoke, setGpsPoke] = useState(pokegps)

    const lvlUp = () => {
        if (gems >= pricePoke && lvlPoke < 100) {
            setLvlPoke(lvlPoke + 1)
            setPricePoke(Math.floor(pricePoke * pricetx))
            setGpsPoke(Math.floor(gpsPoke + gpstx))
            setgem(gems - pricePoke)
        }
    }

    const handleGpsChange = (newGpsPoke) => {
        updateGpsValue(newGpsPoke)
    }

    useEffect(() => {
        handleGpsChange(gpsPoke)
    })




    return (
        <div className='poke-card'>
            <div className='top-card'>
                <img className='Pkm-img' src={pokeimg} alt="" />
                <div className='Pkm-infos'>
                    <h3>{pokename}</h3>
                    <p>💎 {pricePoke}</p>
                </div>
                <div className='Pkm-lvl'>
                    <p>lvl</p>
                    <p>{lvlPoke}</p>
                </div>
            </div>
            <div className='bottom-card'>
                <button onClick={lvlUp} className='btn-train'>Train</button>
                <p className='recolt'>{gpsPoke} gps</p>
            </div>
        </div>
    );
};

export default Pokecard;