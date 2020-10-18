import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

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
  display: flex;
  flex-direction: row;
`

const LeftDiv = styled.div`
  max-width: 320px;
  color: black;
  flex: 6;
`

const RightDiv = styled.div`
  flex: 1;
  text-align: right;
`

const Timestamp = styled.p`
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 0.8em;
  padding-bottom: 1px;
  margin: 0;
`

const P = styled.p`
  margin: 0;
  color: black;
`

export default ({ messages }) => {
  return (
    <>
      {messages.map((message) => {
        return (
          <MessageBox key={message.message + message.time}>
            <LeftDiv>
              <Timestamp>{message.user}</Timestamp>
              <P>{message.message}</P>
            </LeftDiv>
            <RightDiv>
              <Timestamp>{moment(message.time).format('h:mm')}</Timestamp>
            </RightDiv>
          </MessageBox>
        )
      })}
    </>
  )
}
