import React, { useState, useEffect } from 'react'
import { db } from '../utility/firebase'
import Countdown from './Countdown'
import Button from './Button'
import styled from 'styled-components'
import ParseWebsocket from '../containers/ParseWebsocket'

const Centered = styled.div`
  text-align: center;
`

const Callroom = (props) => {
  const [data, setData] = useState({})
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const unsubscribe = db
      .collection('room')
      .doc('kvOJ1KrHegxsTyM5AONv')
      .onSnapshot((querySnapshot) => {
        setData(querySnapshot.data())
      })
    return unsubscribe
  }, [setData])

  useEffect(() => {
    if (data.active) {
      setTime(data.timer.toDate())
    } else {
      setTime(new Date())
    }
  }, [data])

  function stop() {
    // set is active to false
    db.collection('room').doc('kvOJ1KrHegxsTyM5AONv').update({
      active: false,
    })
  }

  function start() {
    // set is active to true
    db.collection('room').doc('kvOJ1KrHegxsTyM5AONv').update({
      active: true,
    })
  }

  return (
    <>
      <ParseWebsocket ws={window.ws} />
      <Countdown countDownDate={time} />
      <Centered>
        {data.active ? (
          <Button
            onClick={() => {
              stop()
            }}
          >
            Cancel timer
          </Button>
        ) : (
          <Button
            onClick={() => {
              start()
            }}
          >
            Start {data.current} timer
          </Button>
        )}
      </Centered>
    </>
  )
}

export default Callroom
