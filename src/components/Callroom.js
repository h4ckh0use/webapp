import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { DBaddTime, currTimer, resetTimer } from '../utility/firebase'
import { useHistory } from 'react-router-dom'
import Countdown from './Countdown'

import ParseWebsocket from '../containers/ParseWebsocket'

const Title = styled.h1`
  font-family: Roboto Mono;
  text-align: center;
`

const Button = styled.button`
  font-size: 16px;
`

const Callroom = (props) => {
  const history = useHistory()
  const location = useLocation()

  const [time, setTime] = useState('')
  const [count, setCount] = useState(0) // using this to trigger handleEffect

  useEffect(() => {
    currTimer((time) => {
      if (Object.keys(time).length === 0) {
        console.log('timer does not exist')
        DBaddTime()
      } else {
        console.log('Time Exists:', time.timer.toDate())
        setTime(time.timer.toDate())
      }
    })
  }, [count])

  const reset = () => {
    setCount(count + 1)
    resetTimer()
  }

  if (!location.state || !location.state.name) {
    history.push('/')
    return null
  } else {
    return (
      <>
        <ParseWebsocket ws={window.ws} />
        <Countdown countDownDate={time} />
        <div style={{ textAlign: 'center', paddingTop: '30px' }}>
          <Button
            onClick={() => {
              reset()
            }}
          >
            Reset Timer
          </Button>
        </div>
      </>
    )
  }
}

export default Callroom
