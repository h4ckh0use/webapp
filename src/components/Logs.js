import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const MessageBox = styled.div`
  background: #fff;
  padding: 10px;
  && > p {
    color: black;
    margin: 0;
  }
  margin: 10px 0;
  border-radius: 5px;
  &&:nth-child(1) {
    margin-top: 0;
  }
`

const Timestamp = styled.p`
  font-size: 0.8em;
  padding-bottom: 1px;
`

export default ({ messages }) => {
  return (
    <>
      {messages.map((message) => {
        return (
          <MessageBox key={message + Date.now()}>
            <Timestamp>{moment(message.time).format('h:mm')}</Timestamp>
            <Timestamp>{message.user}</Timestamp>
            <p>{message}</p>
          </MessageBox>
        )
      })}
    </>
  )
}
