import React, { useState } from 'react'
import Counter from './components/Counter'
import ButtonIncrement from './components/ButtonIncrement'
import Hero from './components/Hero'
import Pokecard from './components/Pokecard'


function App() {

const pokedex = [
  {
    name: "Bulbasaur",
    lvl: 1,
    price: 30,
    TXprice:1.3,
    img:'./assets/img/animated-pokemons/001.gif',
    gps: 0,
    TXgps: 3,
  }
]

  const [counterValue, setCounterValue] = useState(0)
  const [gpsValue, setGpsValue] = useState(0)
  



  return (
    <div className="App">

      <div className="counter-btn">
        <Counter counterValue={counterValue} gpsValue={gpsValue}/>
        <ButtonIncrement counterValue={counterValue} setCounterValue={setCounterValue} />   
      </div>

      <div className='side-menu'>
        <Hero />
        <Pokecard pokename={pokedex[0].name} pokeprice={pokedex[0].price} pricetx={pokedex[0].TXprice} pokeimg={pokedex[0].img} pokegps={pokedex[0].gps} gems={counterValue} setgem={setCounterValue} gpstx={pokedex[0].TXgps}  />

      </div>

    </div>
  )
}

export default App
