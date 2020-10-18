import React from 'react'
import { useLocation } from 'react-router-dom'
import Countdown from './Countdown'
import ParseWebsocket from '../containers/ParseWebsocket'

const date = new Date()
const date_25 = new Date(date.getTime() + 25 * 60000)
// const date_5 = new Date(date.getTime() + 5 * 60000)

// The countdown time needs to be pulled from firebase

const Callroom = (props) => {
  const location = useLocation()
  return (
    <>
      <Countdown countDownDate={date_25} />
      <ParseWebsocket ws={window.ws} />
      <>Hey There {location.state.name}</>
    </>
  )
}

export default Callroom
