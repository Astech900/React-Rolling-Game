import { useState } from 'react'
import './RollGame.css'


function RollGame() {

  const [roll, setRoll] = useState({ v1: 2, v2: 5, v3: 7 });
  const [mgs, setMsg] = useState(`let's Roll`);
  const sumAll = roll.v1 + roll.v2 + roll.v3;

  let getRoll = () => {
    const rV1 = Math.floor(Math.random(1) * 10)
    const rV2 = Math.floor(Math.random(1) * 10)
    const rV3 = Math.floor(Math.random(1) * 10)
    const sumOFAll = rV1 + rV2 + rV3
    console.log(sumOFAll)

    if (sumOFAll !== 15) {
      setMsg('Not Equal to 15 Please Retry!')
      return setRoll((prevRoll) => ({
        ...prevRoll, v1: rV1, v2: rV2, v3: rV3
      }))
    } else {
      setMsg('Congratulation! You won Jack Pot !')
      return setRoll((prevRoll) => ({
        ...prevRoll, v1: rV1, v2: rV2, v3: rV3
      }))
    }


  }
  return (
    <div className='main'>
      <h3 >{mgs}</h3>
      <div className="rollcontainer">
        <div className='cont1'>{roll.v1}</div>
        <div className='cont1'>{roll.v2}</div>
        <div className='cont1'>{roll.v3}</div>
      </div>
      <h2> Score {sumAll}  </h2>
      <button className='rollBtn' onClick={getRoll} >Roll</button>
    </div>
  )
}




export default RollGame;