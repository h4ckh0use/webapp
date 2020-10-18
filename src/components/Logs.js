import React from 'react'
import styled from 'styled-components'

const MessageBox = styled.div`
  background: white;
  padding: 10px;
  && > p {
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
    <>
      {messages.map((message) => {
        return (
          <MessageBox key={message}>
            <p>{message}</p>
          </MessageBox>
        )
      })}
    </>
  )
}
