import React from 'react'
import styled from 'styled-components'

const LogsBox = styled.div`
  width: 400px;
  height: 600px;
  padding: 16px;
  background: rgba(26, 26, 41, 0.6);
  position: absolute;
  right: 10px;
  top: 10px;
  border-radius: 10px;
`

const MessageBox = styled.div`
  background: white;
  padding: 10px;
  && > p {
    color: black;
    margin: 0;
  }
  margin: 10px 0;
  border-radius: 10px;
  &&:nth-child(1) {
    margin-top: 0;
  }
`

export default ({ messages }) => {
  return (
    <LogsBox>
      {messages.map((message) => {
        return (
          <MessageBox key={message}>
            <p>{message}</p>
          </MessageBox>
        )
      })}
    </LogsBox>
  )
}
