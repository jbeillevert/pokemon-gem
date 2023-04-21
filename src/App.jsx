import React, { useState, useEffect } from 'react'
import Counter from './components/Counter'
import ButtonIncrement from './components/ButtonIncrement'
import Hero from './components/Hero'
import Pokecard from './components/Pokecard'


function App() {

  const [counterValue, setCounterValue] = useState(0)
  const [gpsValue, setGpsValue] = useState(0)
  const [pokeGpsValues, setPokeGpsValues] = useState({})
  const [pokedex, setPokedex] = useState([
    {
      id: 1,
      name: "Bulbasaur",
      lvl: 1,
      price: 1,
      TXprice:1.3,
      img:'./assets/img/animated-pokemons/001.gif',
      gps: 0,
      TXgps: 3,
      lvlEvolution: 16,
      evolution: {
        id: 2,
        name: "Ivysaur",
        lvl: 16,
        price: 300,
        TXprice:1.4,
        img:'./assets/img/animated-pokemons/002.gif',
        gps: 4,
        TXgps: 4,
        lvlEvolution: 32,
        evolution: {
          id: 3,
          name: "Venusaur",
          lvl: 32,
          price: 3000,
          TXprice:1.5,
          img:'./assets/img/animated-pokemons/003.gif',
          gps: 5,
          TXgps: 5,
        }
      }
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
  ])




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




  function evolute(id) {
    setPokedex((prevPokedex) => {
      const index = pokedex.findIndex((pokemon) => pokemon.id === id )
      const evolvedPokemon = {...prevPokedex[index]}

      evolvedPokemon.id = evolvedPokemon.evolution.id
      evolvedPokemon.name = evolvedPokemon.evolution.name
      evolvedPokemon.lvl = evolvedPokemon.evolution.lvl
      evolvedPokemon.price = evolvedPokemon.evolution.price
      evolvedPokemon.TXprice = evolvedPokemon.evolution.TXprice
      evolvedPokemon.img = evolvedPokemon.evolution.img
      evolvedPokemon.gps = evolvedPokemon.evolution.gps
      evolvedPokemon.TXgps = evolvedPokemon.evolution.TXgps
      evolvedPokemon.lvlEvolution = evolvedPokemon.evolution.lvlEvolution
      evolvedPokemon.evolution = evolvedPokemon.evolution.evolution

      const updatedPokedex = [...prevPokedex];
      updatedPokedex[index] = evolvedPokemon;
      return updatedPokedex
    })
  }

 

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
              lvlEvolution={pokemon.lvlEvolution} 
              evolute={evolute} 
            />
          ))
        }
      </div>

    </div>
  )
}

export default App
