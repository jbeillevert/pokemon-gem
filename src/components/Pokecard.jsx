import React, { useState } from 'react';
import myImage from '../assets/img/animated-pokemons/001.gif'

const Pokecard = ({pokename, pokeprice, poketx, pokeimg, pokegps, gems, setgem}) => {

    
    const [lvlPoke, setLvlPoke] = useState(1)
    const [pricePoke, setPricePoke] = useState(pokeprice)
    const [gpsPoke, setGpsPoke] = useState(pokegps)

    const lvlUp = () => {
        if (gems >= pricePoke && lvlPoke < 100) {
            setLvlPoke(lvlPoke + 1)
            setPricePoke(Math.floor(pricePoke * poketx))
            setGpsPoke(Math.floor(gpsPoke + poketx))
            setgem(gems - pricePoke)
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
                <h4 className='Pkm-lvl'>lvl {lvlPoke}</h4>
            </div>
            <div className='bottom-card'>
                <button onClick={lvlUp} className='btn-train'>Train</button>
                <p className='recolt'>{gpsPoke} gps</p>
            </div>
        </div>
    );
};

export default Pokecard;