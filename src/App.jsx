import React, { useState, useEffect } from 'react'
import Counter from './components/Counter'
import ButtonIncrement from './components/ButtonIncrement'
import Hero from './components/Hero'
import Pokecard from './components/Pokecard'


function App() {

const pokedex = [
  {
    id: 1,
    name: "Bulbasaur",
    lvl: 1,
    price: 30,
    TXprice:1.3,
    img:'./assets/img/animated-pokemons/001.gif',
    gps: 0,
    TXgps: 3,
  },
  {
    id: 4,
    name: "Charmander",
    lvl: 1,
    price: 30,
    TXprice:1.3,
    img:'./assets/img/animated-pokemons/004.gif',
    gps: 0,
    TXgps: 3,
  },
  {
    id: 7,
    name: "Squirtle",
    lvl: 1,
    price: 30,
    TXprice:1.3,
    img:'./assets/img/animated-pokemons/007.gif',
    gps: 0,
    TXgps: 3,
  },
]

  const [counterValue, setCounterValue] = useState(0)
  const [gpsValue, setGpsValue] = useState(0)
  const [pokeGpsValues, setPokeGpsValues] = useState({})




  const calculateGpsTotal = (pokeId, gpsPoke) => {
    setPokeGpsValues((prevPokeGpsValues) => ({
      ...prevPokeGpsValues,
      [pokeId]: gpsPoke,
    }));
  };

  useEffect(() => {
    const totalGps = Object.values(pokeGpsValues).reduce((sum, gps) => sum + gps, 0);
    setGpsValue(totalGps);
  }, [pokeGpsValues]);

 





  // Menu responsive

  const showMenuResponsive = () => {
    const menuu = document.querySelector('#sideMenu')
    menuu.classList.remove('side-menu')
  }

  useEffect(() => {
    const hideMenuResponsive = (event) => {
      const sideMenu = document.querySelector('#sideMenu')
      if (sideMenu && !sideMenu.contains(event.target)) {
        sideMenu.classList.add('side-menu')
      }
    }

    document.addEventListener('mousedown', hideMenuResponsive)

    return () => {
      document.removeEventListener('mousedown', hideMenuResponsive)
    }
  }, [])
  


  return (
    <div className="App">

      <div className="counter-btn">
        <Counter counterValue={counterValue} gpsValue={gpsValue} setCounterValue={setCounterValue}/>
        <ButtonIncrement counterValue={counterValue} setCounterValue={setCounterValue} />   
      </div>


      <img className='icon-showmenu' onClick={showMenuResponsive} src="./assets/img/favicon/Favicon-pkgem.svg" alt="" />


      <div className={"side-menu menu-visible"} id='sideMenu'>
        <Hero />
        {
          pokedex.map((pokemon, index) => (
            <Pokecard 
              key={index} 
              id={pokemon.id}
              pokename={pokemon.name} 
              pokeprice={pokemon.price} 
              pricetx={pokemon.TXprice} 
              pokeimg={pokemon.img} 
              pokegps={pokemon.gps} 
              gems={counterValue} 
              setgem={setCounterValue} 
              gpstx={pokemon.TXgps} 
              updateGpsValue={calculateGpsTotal}  
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
