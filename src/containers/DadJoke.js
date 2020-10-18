import React, { useState } from 'react'
import Logs from '../components/Logs'

// This component gets the messages from websocket,
// filters them, parses, and passes them to Logs component
const DadJoke = ({ ws }) => {
  const [messages, setMessages] = useState([])

  ws.onmessage = (message) => {
    console.log(message.data)
    setMessages([...messages, message])
  }

  return <Logs messages={messages} />
}

export default DadJoke
