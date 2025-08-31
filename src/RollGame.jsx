import { useState } from 'react'
import './RollGame.css';
import {genRandomNumber, sum} from './helper.js'


function RollGame() {

  const [ticket, setTicket] = useState(genRandomNumber(3));

  let isWinning = sum(ticket) === 15

  let updater = () =>{
    setTicket(genRandomNumber(3))
  }
 
  return (
    <div className='main'>
      <h3 >{isWinning ?'Congratulations, you won!' : 'Retry!'}</h3>
      <div className="rollcontainer">
        <div className='cont1'>{ticket[0]}</div>
        <div className='cont1'>{ticket[1]}</div>
        <div className='cont1'>{ticket[2]}</div>
      </div>
      <h2> Score  </h2>
      <button className='rollBtn' onClick={updater} >Roll</button>
    </div>
  )
   }





export default RollGame;