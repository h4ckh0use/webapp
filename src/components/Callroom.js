import React, { useState, useEffect } from 'react'
import { DBaddTime, currTimer, resetTimer } from '../utility/firebase'
import Countdown from './Countdown'
import Button from './Button'
import styled from 'styled-components'
import ParseWebsocket from '../containers/ParseWebsocket'

const Centered = styled.div`
  text-align: center;
`

const Callroom = (props) => {
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

  return (
    <>
      <ParseWebsocket ws={window.ws} />
      <Countdown countDownDate={time} />
      <Centered>
        <Button
          onClick={() => {
            reset()
          }}
        >
          {' '}
          Reset Timer{' '}
        </Button>
      </Centered>
    </>
  )
}

export default Callroom
