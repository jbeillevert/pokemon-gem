import React, { useState } from 'react';
import myImage from '../assets/img/animated-pokemons/001.gif'

const Pokecard = ({pokename, pokeprice, poketx, pokeimg, pokegps, gems, setgem, updateGpsValue}) => {

    
    const [lvlPoke, setLvlPoke] = useState(1)
    const [pricePoke, setPricePoke] = useState(pokeprice)
    const [gpsPoke, setGpsPoke] = useState(pokegps)

    const lvlUp = () => {
        if (gems >= pricePoke && lvlPoke < 100) {
            setLvlPoke(lvlPoke + 1)
            setPricePoke(Math.floor(pricePoke * poketx))
            setGpsPoke(Math.floor(gpsPoke + poketx))
            setgem(gems - pricePoke)
            updateGpsValue(gpsPoke)
        }
    }




    return (
        <div className='poke-card'>
            <div className='top-card'>
                <img className='Pkm-img' src={pokeimg} alt="" />
                <div className='Pkm-infos'>
                    <h3>{pokename}</h3>
                    <p>💎 {pricePoke}</p>
                </div>
                <div className='Pkm-lvl'>
                    <h4>lvl</h4>
                    <h4>{lvlPoke}</h4>
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