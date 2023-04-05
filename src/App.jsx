import React, { useState } from 'react'
import Counter from './components/Counter'
import ButtonIncrement from './components/ButtonIncrement'


function App() {

  const [counterValue, setCounterValue] = useState(0)
  const [gpsValue, setGpsValue] = useState(0)


  return (
    <div className="App">

      <div className="counter-btn">
        <Counter counterValue={counterValue} gpsValue={gpsValue}/>
        <ButtonIncrement />   
      </div>

    </div>
  )
}

export default App
