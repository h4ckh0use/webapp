import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Logs from '../components/Logs'
import ChatEntry from '../components/ChatEntry'
import EmergencySound from './emergency.mp3'
import Emergency from '../components/Emergency'

const LogsBox = styled.div`
  width: 400px;
  padding: 16px;
  background: #ffffff11;
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 5px;
`

const ChatContainer = styled.div`
  height: 550px;
  overflow-y: auto;
`

// This component gets the messages from websocket,
// filters them, parses, and passes them to Logs component
const ParseWebsocket = ({ ws }) => {
  const [messages, setMessages] = useState([
    {
      message: `Welcome to imposter, ${window.localStorage.getItem(
        'user'
      )}! Try not to act too sus`,
      time: Date.now(),
    },
  ])
  const [chatEntry, setChatEntry] = useState('')
  const [shouldShowEmergencyWrapper, setShowEmergencyWrapper] = useState(false)
  const [isEmergency, setIsEmergency] = useState(false)
  const [emergencyCauser, setEmergencyCauser] = useState('')

  ws.onmessage = (message) => {
    if (message.data !== 'Successful connection!') {
      const data = JSON.parse(message.data)
      if (data.broadcast) {
        setMessages([...messages, data])

        if (data.emergency) {
          setShowEmergencyWrapper(true)
          setIsEmergency(true)
          setEmergencyCauser(data.user || '')
          let audio = new Audio(EmergencySound)
          console.log('audio playing')
          audio.volume = 0.5
          audio.play()
          setTimeout(() => {
            setIsEmergency(false)
          }, 3000)
          setTimeout(() => {
            setShowEmergencyWrapper(false)
          }, 5000)
        }
      }
    }
  }

  const handleClick = () => {
    if (!!chatEntry) {
      ws.send(
        JSON.stringify({
          broadcast: true,
          user: window.localStorage.getItem('user'),
          message: chatEntry,
          time: Date.now(),
        })
      )
      setChatEntry('')
    }
  }

  const handleChange = (event) => {
    setChatEntry(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleClick()
    }
  }

  useEffect(() => {
    const myElement = document.getElementById('element_within_div')
    const topPos = myElement && myElement.offsetTop
    document.getElementById('scrolling_div').scrollTop = topPos
  }, [messages])

  return (
    <>
      <Emergency
        isEmergency={isEmergency}
        user={emergencyCauser}
        showWrapper={shouldShowEmergencyWrapper}
      />
      <LogsBox>
        <ChatContainer id="scrolling_div">
          <Logs messages={messages} />
          <span id="element_within_div" />
        </ChatContainer>
        <ChatEntry
          chatValue={chatEntry}
          handleChange={(e) => handleChange(e)}
          handleClick={handleClick}
          handleKeyDown={handleKeyDown}
        />
      </LogsBox>
    </>
  )
}

export default ParseWebsocket
