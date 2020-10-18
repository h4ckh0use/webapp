import React, { useState } from 'react'
import styled from 'styled-components'
import Logs from '../components/Logs'
import ChatEntry from '../components/ChatEntry'

const LogsBox = styled.div`
  width: 400px;
  padding: 16px;
  background: rgba(26, 26, 41, 0.6);
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 10px;
`

const ChatContainer = styled.div`
  height: 550px;
`

// This component gets the messages from websocket,
// filters them, parses, and passes them to Logs component
const ParseWebsocket = ({ ws }) => {
  const [messages, setMessages] = useState(['Welcome to imPomter'])
  const [chatEntry, setChatEntry] = useState('')

  ws.onmessage = (message) => {
    const data = JSON.parse(message.data)
    console.log(data.broadcast)

    if (data.broadcast) {
      setMessages([...messages, data.message])
    }
  }

  const handleClick = () => {
    ws.send(JSON.stringify({ broadcast: true, message: chatEntry }))
    setChatEntry('')
  }

  const handleChange = (event) => {
    setChatEntry(event.target.value)
  }

  return (
    <LogsBox>
      <ChatContainer>
        <Logs messages={messages} />
      </ChatContainer>
      <ChatEntry
        chatValue={chatEntry}
        handleChange={(e) => handleChange(e)}
        handleClick={handleClick}
      />
    </LogsBox>
  )
}

export default ParseWebsocket
