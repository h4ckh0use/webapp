import React, { useState } from 'react'
import Logs from '../components/Logs'

// This component gets the messages from websocket,
// filters them, parses, and passes them to Logs component
const ParseWebsocket = ({ ws }) => {
  const [messages, setMessages] = useState(['Welcome to imPomter'])

  ws.onmessage = (message) => {
    if (message.data !== 'Successful connection!') {
      const data = JSON.parse(message.data)
      console.log(data.broadcast)

      if (data.broadcast) {
        setMessages([...messages, data.message])
      }
    }
  }

  return <Logs messages={messages} />
}

export default ParseWebsocket
